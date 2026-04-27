'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button, TelegramIcon } from './ui/Button';
import { siteConfig } from '@/data/config';

const NAV = [
  { href: '#reels', label: 'Реелс' },
  { href: '#formats', label: 'Что делаем' },
  { href: '#process', label: 'Как работаем' },
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        'backdrop-blur-md',
        scrolled
          ? 'border-b border-white/[0.06] bg-black/70'
          : 'border-b border-transparent bg-black/30',
      )}
    >
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-text0 transition-opacity hover:opacity-80"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
          VIBE MACHINE
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-text1 transition-colors hover:text-text0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          href={siteConfig.tgLink}
          variant="primary"
          analyticsLabel="header"
          className="!min-h-[44px] !py-2.5 !px-5 !text-[15px]"
        >
          <TelegramIcon size={16} />
          Запустить
        </Button>
      </div>
    </header>
  );
}
