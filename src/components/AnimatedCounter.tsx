import React from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isVisible?: boolean;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  isVisible = true,
  className = ''
}) => {
  const count = useCountAnimation(target, duration, isVisible);

  return (
    <div className={`font-bold text-eco-blue transition-all duration-300 ${className}`}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;