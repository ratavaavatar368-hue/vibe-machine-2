'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'p' | 'h2' | 'h3' | 'span';
}

/**
 * Lightweight scroll-reveal — single IntersectionObserver, CSS-only animation.
 * Replaces framer-motion whileInView for static fade-up reveals
 * (no per-frame JS, no React re-render on animation).
 */
export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={clsx(className, 'reveal-up', shown && 'reveal-up--in')}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
