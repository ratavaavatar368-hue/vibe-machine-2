'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from './ui/Button';
import { siteConfig } from '@/data/config';

const NAV = [
  { href: '#reels', label: 'Реелс' },
  { href: '#formats', label: 'Что делаем' },
  { href: '#process', label: 'Как работаем' },
  { href: '#cta', label: 'Запустить' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-200',
        'backdrop-blur-md',
        scrolled
          ? 'border-b border-border bg-bg/70'
          : 'border-b border-transparent bg-bg/40',
      )}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-6 py-4 md:px-12">
        <a
          href="#top"
          className="font-mono text-[13px] uppercase tracking-[0.1em] text-text transition-opacity hover:opacity-80"
        >
          {siteConfig.brand}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-text-dim transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={siteConfig.tgLink}
          variant="primary"
          size="md"
          analyticsLabel="header"
        >
          Запустить →
        </Button>
      </div>
    </header>
  );
}
