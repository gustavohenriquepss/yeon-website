'use client';

import type { Variants } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { cn } from '@/lib/utils';

export interface LayoutDashboardAnimatedHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface LayoutDashboardAnimatedProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const RECT_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  animate: (custom: number) => ({
    scale: [0.8, 1.1, 1],
    opacity: [0.5, 1],
    transition: {
      delay: custom * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  }),
};

const LayoutDashboardAnimated = forwardRef<LayoutDashboardAnimatedHandle, LayoutDashboardAnimatedProps>(
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
          <motion.rect
            width="7"
            height="9"
            x="3"
            y="3"
            rx="1"
            variants={RECT_VARIANTS}
            animate={controls}
            custom={0}
          />
          <motion.rect
            width="7"
            height="5"
            x="14"
            y="3"
            rx="1"
            variants={RECT_VARIANTS}
            animate={controls}
            custom={1}
          />
          <motion.rect
            width="7"
            height="9"
            x="14"
            y="12"
            rx="1"
            variants={RECT_VARIANTS}
            animate={controls}
            custom={2}
          />
          <motion.rect
            width="7"
            height="5"
            x="3"
            y="16"
            rx="1"
            variants={RECT_VARIANTS}
            animate={controls}
            custom={3}
          />
        </svg>
      </div>
    );
  }
);

LayoutDashboardAnimated.displayName = 'LayoutDashboardAnimated';

export { LayoutDashboardAnimated };
