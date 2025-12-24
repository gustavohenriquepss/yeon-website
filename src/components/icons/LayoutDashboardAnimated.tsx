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
  },
  animate: (custom: number) => ({
    scale: [1, 1.15, 1],
    opacity: [0.7, 1],
    transition: {
      delay: custom * 0.08,
      type: 'spring',
      stiffness: 300,
      damping: 12,
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
            initial="normal"
            animate={controls}
            custom={0}
            style={{ transformOrigin: '6.5px 7.5px' }}
          />
          <motion.rect
            width="7"
            height="5"
            x="14"
            y="3"
            rx="1"
            variants={RECT_VARIANTS}
            initial="normal"
            animate={controls}
            custom={1}
            style={{ transformOrigin: '17.5px 5.5px' }}
          />
          <motion.rect
            width="7"
            height="9"
            x="14"
            y="12"
            rx="1"
            variants={RECT_VARIANTS}
            initial="normal"
            animate={controls}
            custom={2}
            style={{ transformOrigin: '17.5px 16.5px' }}
          />
          <motion.rect
            width="7"
            height="5"
            x="3"
            y="16"
            rx="1"
            variants={RECT_VARIANTS}
            initial="normal"
            animate={controls}
            custom={3}
            style={{ transformOrigin: '6.5px 18.5px' }}
          />
        </svg>
      </div>
    );
  }
);

LayoutDashboardAnimated.displayName = 'LayoutDashboardAnimated';

export { LayoutDashboardAnimated };
