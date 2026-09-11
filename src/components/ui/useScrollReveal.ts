import { useEffect, useRef, useState, useMemo } from 'react';
import type React from 'react';

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'blur-in'
  | 'pop'
  | 'none';

export interface ScrollRevealOptions {
  variant?: AnimationVariant;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  distance?: number; // in pixels
  threshold?: number; // 0 to 1
  once?: boolean; // animate only once or reset on scroll away
  rootMargin?: string;
  easing?: string;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    variant = 'fade-up',
    delay = 0,
    duration = 750,
    distance = 32,
    threshold = 0.15,
    once = false,
    rootMargin = '0px 0px -40px 0px',
    easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
  } = options;

  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const style: React.CSSProperties = useMemo(() => {
    const activeEasing = variant === 'pop' ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : easing;

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
        case 'zoom-out':
          transform = 'scale(1.08)';
          break;
        case 'pop':
          transform = `translate3d(0, ${distance}px, 0) scale(0.85)`;
          break;
        case 'blur-in':
        case 'none':
        default:
          transform = 'translate3d(0, 0, 0)';
      }
    }

    const filter = variant === 'blur-in' && !isVisible ? 'blur(10px)' : 'none';

    return {
      opacity: isVisible ? 1 : 0,
      transform,
      filter,
      transitionProperty: 'opacity, transform, filter',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: activeEasing,
      transitionDelay: `${delay}ms`,
      willChange: 'opacity, transform, filter',
    };
  }, [isVisible, variant, duration, delay, distance, easing]);

  return { ref, isVisible, style };
}
