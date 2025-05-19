
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  className, 
  size = 24, 
  strokeWidth = 2 
}) => {
  const IconComponent = LucideIcons[name] as React.FC<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;

  if (!IconComponent) {
    console.error(`Icon ${name} not found`);
    return null;
  }

  return (
    <IconComponent 
      className={cn(className)} 
      size={size} 
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;
