import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from './useScrollReveal';
import type { AnimationVariant, ScrollRevealOptions } from './useScrollReveal';

export interface ScrollRevealProps extends ScrollRevealOptions {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  style: userStyle = {},
  as: Component = 'div',
  variant = 'fade-up',
  delay = 0,
  duration = 750,
  distance = 32,
  threshold = 0.15,
  once = false,
  rootMargin = '0px 0px -40px 0px',
  easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  id,
}) => {
  const { ref, style: animStyle } = useScrollReveal({
    variant,
    delay,
    duration,
    distance,
    threshold,
    once,
    rootMargin,
    easing,
  });

  return (
    <Component
      ref={ref}
      id={id}
      className={className}
      style={{
        ...animStyle,
        ...userStyle,
      }}
    >
      {children}
    </Component>
  );
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  staggerDelay?: number; // delay between each child in ms
  baseDelay?: number; // initial delay in ms
  variant?: AnimationVariant;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  style: userStyle = {},
  as: Component = 'div',
  staggerDelay = 100,
  baseDelay = 0,
  variant = 'fade-up',
  duration = 700,
  distance = 28,
  threshold = 0.12,
  once = false,
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const childArray = React.Children.toArray(children);

  return (
    <Component ref={containerRef} className={className} style={userStyle}>
      {childArray.map((child, index) => {
        const itemDelay = baseDelay + index * staggerDelay;

        let transform = 'translate3d(0, 0, 0) scale(1)';
        if (!isVisible) {
          switch (variant) {
            case 'fade-up':
              transform = `translate3d(0, ${distance}px, 0)`;
              break;
            case 'fade-down':
              transform = `translate3d(0, -${distance}px, 0)`;
              break;
            case 'fade-left':
              transform = `translate3d(${distance}px, 0, 0)`;
              break;
            case 'fade-right':
              transform = `translate3d(-${distance}px, 0, 0)`;
              break;
            case 'zoom-in':
              transform = `translate3d(0, ${Math.round(distance / 2)}px, 0) scale(0.92)`;
              break;
            case 'pop':
              transform = `translate3d(0, ${distance}px, 0) scale(0.85)`;
              break;
            default:
              transform = 'translate3d(0, 0, 0)';
          }
        }

        const itemStyle: React.CSSProperties = {
          opacity: isVisible ? 1 : 0,
          transform,
          transitionProperty: 'opacity, transform',
          transitionDuration: `${duration}ms`,
          transitionTimingFunction:
            variant === 'pop' ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: `${itemDelay}ms`,
          willChange: 'opacity, transform',
        };

        return (
          <div key={index} style={itemStyle}>
            {child}
          </div>
        );
      })}
    </Component>
  );
};

export default ScrollReveal;
