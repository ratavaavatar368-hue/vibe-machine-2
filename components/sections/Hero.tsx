'use client';

import { Button, TelegramIcon } from '../ui/Button';
import { siteConfig } from '@/data/config';

const PLATFORMS = [
  { label: 'TikTok', svg: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.53a8.16 8.16 0 0 0 4.77 1.52V7.61a4.84 4.84 0 0 1-1-.92z" /> },
  { label: 'Reels', svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
  { label: 'Shorts', svg: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
  { label: 'ВК Видео', svg: <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.49.228v1.497c0 .36-.124.576-1.178.576-1.627 0-3.43-.992-4.703-2.84C6.21 12.37 5.5 10.21 5.5 10.04c0-.18.108-.36.456-.36h1.748c.348 0 .468.156.6.528.672 1.94 1.8 3.637 2.256 3.637.168 0 .24-.072.24-.468v-1.837c-.048-.852-.504-.924-.504-1.224 0-.156.132-.312.336-.312h2.748c.3 0 .408.156.408.516v2.472c0 .3.132.396.216.396.168 0 .312-.108.624-.42 1.02-1.092 1.752-2.76 1.752-2.76.096-.18.264-.36.6-.36h1.752c.528 0 .636.264.528.516-.216.996-2.28 3.816-2.28 3.816-.18.288-.24.42 0 .732.168.228.72.7 1.08 1.128.672.756 1.188 1.392 1.32 1.824.156.432-.06.648-.492.648z" /> },
];

const BULLETS = [
  { emoji: '🎬', text: 'Самые актуальные AI-модели генерации видео' },
  { emoji: '🕵', text: 'Отсутствие мета-данных — алгоритмы не распознают наши видео как AI-контент' },
  { emoji: '📈', text: 'Наши клиенты — блогеры-миллионники' },
];

export function Hero() {
  return (
    <section id="top" className="block block-tall relative overflow-hidden">
      <div className="plasma" aria-hidden />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <div className="hero-entry mb-6" style={{ animationDelay: '0s' }}>
          <span className="eyebrow">Контент-завод</span>
        </div>

        <h1
          className="hero-entry h-display mb-7 max-w-[20ch] text-[clamp(2.5rem,7vw,6.25rem)]"
          style={{ animationDelay: '0.15s' }}
        >
          Вертикальный контент{' '}
          <span className="text-gradient-hero">50–150 роликов в&nbsp;месяц.</span>
        </h1>

        <p
          className="hero-entry mb-10 max-w-[42ch] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-snug text-text1"
          style={{ animationDelay: '0.3s' }}
        >
          Создаём контент, неотличимый от&nbsp;реальных съёмок, для&nbsp;вашего бизнеса. Без вашего участия.
        </p>

        <div
          className="hero-entry mb-12 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: '0.5s' }}
        >
          <Button
            href={siteConfig.tgLink}
            variant="primary"
            size="lg"
            glow
            analyticsLabel="hero"
          >
            <TelegramIcon size={18} />
            Запустить поток
          </Button>
          <a
            href="#reels"
            className="text-[15px] text-text1 underline decoration-white/20 underline-offset-4 transition-colors hover:text-text0 hover:decoration-white/60"
          >
            Смотреть примеры ↓
          </a>
        </div>

        <div
          className="hero-entry mb-16 flex flex-col items-center gap-3"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text2">
            Раздаём на платформы
          </p>
          <div className="flex flex-nowrap items-center justify-center gap-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 md:px-5 md:py-2.5">
            {PLATFORMS.map((p, i) => (
              <div key={p.label} className="flex items-center">
                {i > 0 && <span className="mx-2 h-3.5 w-px bg-white/10" />}
                <span className="flex items-center gap-1.5 px-2 text-text1 transition-colors hover:text-text0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    {p.svg}
                  </svg>
                  <span className="font-mono text-[11px] font-medium tracking-wide">{p.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <ul
          className="hero-entry grid w-full max-w-[960px] grid-cols-1 gap-5 text-left md:grid-cols-3"
          style={{ animationDelay: '0.9s' }}
        >
          {BULLETS.map((b) => (
            <li key={b.text} className="card-base">
              <div className="text-[28px] leading-none">{b.emoji}</div>
              <div className="mt-4 text-[15px] font-medium leading-relaxed text-text0">{b.text}</div>
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text2"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Листай</span>
        <span className="block h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
