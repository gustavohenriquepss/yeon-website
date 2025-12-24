'use client';

import type { Variants } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';

import { cn } from '@/lib/utils';

export interface ChartColumnIncreasingIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChartColumnIncreasingIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const LINE_VARIANTS: Variants = {
  visible: { pathLength: 1, opacity: 1 },
  hidden: { pathLength: 0, opacity: 0 },
};

const ChartColumnIncreasingIcon = forwardRef<
  ChartColumnIncreasingIconHandle,
  ChartColumnIncreasingIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: async () => {
        await controls.start((i) => ({
          pathLength: 0,
          opacity: 0,
          transition: { delay: i * 0.1, duration: 0.3 },
        }));
        await controls.start((i) => ({
          pathLength: 1,
          opacity: 1,
          transition: { delay: i * 0.1, duration: 0.3 },
        }));
      },
      stopAnimation: () => controls.start('visible'),
    };
  });

  const handleMouseEnter = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) {
        await controls.start((i) => ({
          pathLength: 0,
          opacity: 0,
          transition: { delay: i * 0.1, duration: 0.3 },
        }));
        await controls.start((i) => ({
          pathLength: 1,
          opacity: 1,
          transition: { delay: i * 0.1, duration: 0.3 },
        }));
      } else {
        onMouseEnter?.(e);
      }
    },
    [controls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isControlledRef.current) {
        controls.start('visible');
      } else {
        onMouseLeave?.(e);
      }
    },
    [controls, onMouseLeave]
  );

  return (
    <div
      className={cn(
        'cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center',
        className
      )}
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
        <motion.line
          x1="13"
          x2="13"
          y1="17"
          y2="9"
          variants={LINE_VARIANTS}
          initial="visible"
          animate={controls}
          custom={0}
        />
        <motion.line
          x1="18"
          x2="18"
          y1="17"
          y2="5"
          variants={LINE_VARIANTS}
          initial="visible"
          animate={controls}
          custom={1}
        />
        <motion.line
          x1="8"
          x2="8"
          y1="17"
          y2="14"
          variants={LINE_VARIANTS}
          initial="visible"
          animate={controls}
          custom={2}
        />
        <motion.line
          x1="3"
          x2="3"
          y1="17"
          y2="11"
          variants={LINE_VARIANTS}
          initial="visible"
          animate={controls}
          custom={3}
        />
        <motion.path
          d="M2 17h20"
          variants={LINE_VARIANTS}
          initial="visible"
          animate={controls}
          custom={4}
        />
      </svg>
    </div>
  );
});

ChartColumnIncreasingIcon.displayName = 'ChartColumnIncreasingIcon';

export { ChartColumnIncreasingIcon };
