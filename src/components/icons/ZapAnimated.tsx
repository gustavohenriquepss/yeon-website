import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';

export interface ZapAnimatedHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ZapAnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const pathVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
};

const ZapAnimated = forwardRef<ZapAnimatedHandle, ZapAnimatedProps>(
  ({ size = 24, className, ...props }, ref) => {
    const controls = useAnimation();

    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        controls.start('animate');
      },
      stopAnimation: () => {
        controls.start('normal');
      },
    }));

    const handleMouseEnter = useCallback(() => {
      controls.start('animate');
    }, [controls]);

    const handleMouseLeave = useCallback(() => {
      controls.start('normal');
    }, [controls]);

    return (
      <div
        className={className}
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
          <motion.path
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
            variants={pathVariants}
            animate={controls}
            initial="normal"
          />
        </svg>
      </div>
    );
  }
);

ZapAnimated.displayName = 'ZapAnimated';

export { ZapAnimated };
