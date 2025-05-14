
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Revenue } from '@/hooks/useCalculator';
import { Platform } from '@/data/platforms';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronRight, Lightbulb } from 'lucide-react';

interface RevenueBoostInsightsProps {
  results: Revenue[];
  platforms: Platform[];
  totalRevenue: number;
  visible: boolean;
}

const RevenueBoostInsights: React.FC<RevenueBoostInsightsProps> = ({
  results,
  platforms,
  totalRevenue,
  visible
}) => {
  const { t } = useLanguage();
  const [openInsightId, setOpenInsightId] = useState<string | null>(null);

  if (!visible || totalRevenue === 0) return null;

  // Calculate insights based on the user's streaming data
  const generateInsights = () => {
    const insights: Array<{ id: string; title: string; description: string; expanded: string }> = [];
    
    // Get platforms being used
    const usedPlatforms = results.filter(r => r.streams > 0).map(r => {
      const platform = platforms.find(p => p.id === r.platformId);
      return {
        ...r,
        platformInfo: platform
      };
    });
    
    // Sort by streams
    const sortedByStreams = [...usedPlatforms].sort((a, b) => b.streams - a.streams);
    // Sort by revenue
    const sortedByRevenue = [...usedPlatforms].sort((a, b) => b.amount - a.amount);
    
    // Most streamed platform has low rate
    if (sortedByStreams.length > 0 && sortedByRevenue.length > 0) {
      const mostStreamedPlatform = sortedByStreams[0];
      const highestRatePlatforms = platforms
        .filter(p => p.rate > (mostStreamedPlatform.platformInfo?.rate || 0))
        .sort((a, b) => b.rate - a.rate)
        .slice(0, 2);
      
      if (highestRatePlatforms.length > 0 && mostStreamedPlatform.platformInfo?.rate && 
          highestRatePlatforms[0].rate > mostStreamedPlatform.platformInfo.rate * 1.5) {
        insights.push({
          id: 'better-platforms',
          title: t('insightBetterPlatforms'),
          description: `${t('insightBetterPlatformsDesc')} ${highestRatePlatforms.map(p => p.name).join(t('and'))}`,
          expanded: t('insightBetterPlatformsExpanded')
        });
      }
    }
    
    // Missing high-paying platforms
    const unusedHighPayingPlatforms = platforms
      .filter(p => !usedPlatforms.some(up => up.platformId === p.id))
      .filter(p => p.rate >= 0.007) // Filter for high paying platforms
      .sort((a, b) => b.rate - a.rate);
    
    if (unusedHighPayingPlatforms.length > 0) {
      insights.push({
        id: 'missing-platforms',
        title: t('insightMissingPlatforms'),
        description: `${t('insightMissingPlatformsDesc')} ${unusedHighPayingPlatforms[0].name}`,
        expanded: t('insightMissingPlatformsExpanded')
      });
    }
    
    // Direct sales suggestion
    insights.push({
      id: 'direct-sales',
      title: t('insightDirectSales'),
      description: t('insightDirectSalesDesc'),
      expanded: t('insightDirectSalesExpanded')
    });
    
    // PRO publishing suggestion
    insights.push({
      id: 'pro-publishing',
      title: t('insightProPublishing'),
      description: t('insightProPublishingDesc'),
      expanded: t('insightProPublishingExpanded')
    });
    
    return insights;
  };
  
  const insights = generateInsights();

  return (
    <div className="mt-8 animate-fade-in">
      <Card className="bg-yeon-darker-bg border-white/5">
        <CardHeader className="bg-secondary/50">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yeon-purple" />
            <CardTitle className="text-lg font-semibold">{t('boostRevenue')}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {insights.map((insight) => (
            <Collapsible
              key={insight.id}
              open={openInsightId === insight.id}
              onOpenChange={(open) => setOpenInsightId(open ? insight.id : null)}
              className="bg-secondary/30 rounded-lg border border-white/5 overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-yeon-purple mt-0.5" />
                    <div>
                      <h4 className="font-medium">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-1 h-auto">
                      <ChevronRight 
                        className={`h-4 w-4 transition-transform ${openInsightId === insight.id ? "rotate-90" : ""}`} 
                      />
                      <span className="sr-only">{t('moreInfo')}</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
              </div>
              <CollapsibleContent>
                <div className="px-4 pb-4 pt-0 border-t border-white/5">
                  <p className="text-sm text-muted-foreground pl-8">{insight.expanded}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueBoostInsights;
