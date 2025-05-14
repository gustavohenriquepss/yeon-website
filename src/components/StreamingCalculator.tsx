
import React from 'react';
import { platforms } from '@/data/platforms';
import { useCalculator } from '@/hooks/useCalculator';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import PlatformInput from './PlatformInput';
import ResultsSection from './ResultsSection';

const StreamingCalculator: React.FC = () => {
  const { t } = useLanguage();
  const { 
    streamData, 
    updateStreamCount, 
    calculateRevenue, 
    resetCalculator, 
    results, 
    totalRevenue,
    hasCalculated
  } = useCalculator(platforms);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateRevenue();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <PlatformInput
              key={platform.id}
              platform={platform}
              value={streamData[platform.id] || 0}
              onChange={(value) => updateStreamCount(platform.id, value)}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button 
            type="submit"
            size="lg"
            className="bg-yeon-purple hover:bg-yeon-dark-purple text-secondary font-medium px-8"
          >
            {t('calculateButton')}
          </Button>
          <Button 
            type="button"
            variant="outline" 
            size="lg"
            onClick={resetCalculator}
            className="border-white/10 hover:bg-secondary"
          >
            {t('resetButton')}
          </Button>
        </div>
      </form>

      <ResultsSection 
        results={results}
        platforms={platforms}
        totalRevenue={totalRevenue}
        visible={hasCalculated}
      />
    </div>
  );
};

export default StreamingCalculator;
