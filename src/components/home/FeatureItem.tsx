
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
      "h-full border-0 rounded-xl transition-all duration-300 hover:scale-105 bg-[#222222] hover:bg-[#333333]",
      size === 'large' ? 'md:col-span-2' : ''
    )}>
      <CardContent className="flex flex-col h-full p-6">
        {image && (
          <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          {tag && (
            <Badge className="bg-yeon-purple hover:bg-yeon-purple text-xs">
              {tag}
            </Badge>
          )}
        </div>
        <p className="text-white/80 mb-auto text-sm md:text-base">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureItem;
