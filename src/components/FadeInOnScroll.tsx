import { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeInOnScroll({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up' 
}: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'up':
        return 'translate-y-8';
      case 'down':
        return '-translate-y-8';
      case 'left':
        return 'translate-x-8';
      case 'right':
        return '-translate-x-8';
      default:
        return 'translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 100, className = '' }: StaggerContainerProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeInOnScroll key={index} delay={index * staggerDelay}>
          {child}
        </FadeInOnScroll>
      ))}
    </div>
  );
}
