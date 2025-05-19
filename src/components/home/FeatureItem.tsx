import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
export interface FeatureItemProps {
  title: string;
  description: string;
  size?: 'small' | 'large';
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  size = 'small'
}) => {
  return <Card className={cn("h-full border-0 rounded-xl transition-all duration-300 hover:scale-105 bg-yeon-purple/90 hover:bg-yeon-purple", size === 'large' ? 'md:col-span-2' : '')}>
      <CardContent className="flex flex-col h-full p-6 w-max\n">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-white/80 mb-auto text-sm md:text-base">{description}</p>
      </CardContent>
    </Card>;
};
export default FeatureItem;