
import React from 'react';
import * as TablerIcons from '@tabler/icons-react';
import { cn } from '@/lib/utils';

export type IconName = keyof typeof TablerIcons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  stroke?: number;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  className, 
  size = 24, 
  stroke = 2 
}) => {
  const IconComponent = TablerIcons[name] as React.FC<{
    size?: number;
    className?: string;
    stroke?: number;
  }>;

  if (!IconComponent) {
    console.error(`Icon ${name} not found`);
    return null;
  }

  return (
    <IconComponent 
      className={cn(className)} 
      size={size} 
      stroke={stroke}
    />
  );
};

export default Icon;
