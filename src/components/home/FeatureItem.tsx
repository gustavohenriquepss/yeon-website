
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface FeatureItemProps {
  title: string;
  description: string;
  size?: 'small' | 'large';
  tag?: string;
  image?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  size = 'small',
  tag,
  image
}) => {
  return (
    <Card className={cn(
      "border-0 bg-card overflow-hidden",
      size === 'large' ? 'md:col-span-2' : ''
    )}>
      <CardContent className="p-0">
        {image && (
          <div className="aspect-video w-full overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            {tag && (
              <Badge className="bg-white/10 text-white/70 hover:bg-white/15 border-white/20 text-xs">
                {tag}
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureItem;
