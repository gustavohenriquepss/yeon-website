'use client';

import type { Variants } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';

export interface BarChart3AnimatedHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BarChart3AnimatedProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BAR_VARIANTS: Variants = {
  normal: {
    scaleY: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  animate: (custom: number) => ({
    scaleY: [0, 1.2, 1],
    opacity: [0.3, 1],
    transition: {
      delay: custom * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 12,
    },
  }),
};

const BarChart3Animated = forwardRef<BarChart3AnimatedHandle, BarChart3AnimatedProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal'),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('animate');
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start('normal');
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <motion.path
            d="M18 17V9"
            variants={BAR_VARIANTS}
            initial="normal"
            animate={controls}
            custom={0}
            style={{ originY: 1 }}
          />
          <motion.path
            d="M13 17V5"
            variants={BAR_VARIANTS}
            initial="normal"
            animate={controls}
            custom={1}
            style={{ originY: 1 }}
          />
          <motion.path
            d="M8 17v-3"
            variants={BAR_VARIANTS}
            initial="normal"
            animate={controls}
            custom={2}
            style={{ originY: 1 }}
          />
        </svg>
      </div>
    );
  }
);

BarChart3Animated.displayName = 'BarChart3Animated';

export { BarChart3Animated };
