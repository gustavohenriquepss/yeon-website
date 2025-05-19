
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
  size?: 'small' | 'large';
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  icon,
  size = 'small'
}) => {
  return (
    <Card className={cn(
      "overflow-hidden group relative h-full border-0 rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary/80",
      size === 'large' ? 'md:col-span-2' : ''
    )}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
      </div>
      
      <CardContent className="relative z-10 flex flex-col h-full p-6">
        <div className="p-3 bg-yeon-purple/10 rounded-full mb-3 self-start">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70 mb-auto text-sm md:text-base">{description}</p>
        <Button asChild variant="outline" className="mt-4 self-start border-yeon-purple text-yeon-purple hover:bg-yeon-purple hover:text-white">
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureItem;
