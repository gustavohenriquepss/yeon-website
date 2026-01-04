import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';

export interface SparklesAnimatedHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SparklesAnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const sparkleVariants: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    scale: [1, 1.3, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: 'easeInOut',
    },
  }),
};

const SparklesAnimated = forwardRef<SparklesAnimatedHandle, SparklesAnimatedProps>(
  ({ size = 24, className, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => ({
      startAnimation: () => {
        isControlledRef.current = true;
        controls.start('animate');
      },
      stopAnimation: () => {
        isControlledRef.current = false;
        controls.start('normal');
      },
    }));

    const handleMouseEnter = useCallback(() => {
      if (!isControlledRef.current) {
        controls.start('animate');
      }
    }, [controls]);

    const handleMouseLeave = useCallback(() => {
      if (!isControlledRef.current) {
        controls.start('normal');
      }
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
          {/* Main large sparkle */}
          <motion.path
            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
            variants={sparkleVariants}
            custom={0}
            animate={controls}
            initial="normal"
          />
          {/* Small top-right sparkle */}
          <motion.path
            d="M20 3v4"
            variants={sparkleVariants}
            custom={1}
            animate={controls}
            initial="normal"
          />
          <motion.path
            d="M22 5h-4"
            variants={sparkleVariants}
            custom={1}
            animate={controls}
            initial="normal"
          />
          {/* Small bottom-left sparkle */}
          <motion.path
            d="M4 17v2"
            variants={sparkleVariants}
            custom={2}
            animate={controls}
            initial="normal"
          />
          <motion.path
            d="M5 18H3"
            variants={sparkleVariants}
            custom={2}
            animate={controls}
            initial="normal"
          />
        </svg>
      </div>
    );
  }
);

SparklesAnimated.displayName = 'SparklesAnimated';

export { SparklesAnimated };
