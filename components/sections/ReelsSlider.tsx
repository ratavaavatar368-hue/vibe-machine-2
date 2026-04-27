'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { SectionLabel } from '../ui/SectionLabel';
import { reels, type Reel } from '@/data/reels';

export function ReelsSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  const total = reels.length;

  // rAF-throttled scroll handler with change-guard.
  // Replaces per-event setState (which re-rendered all 6 cards on every scroll tick).
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    let lastIdx = -1;

    const recompute = () => {
      frame = 0;
      const cards = el.querySelectorAll<HTMLElement>('[data-card]');
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        const cardCenter = c.offsetLeft + c.offsetWidth / 2;
        const d = Math.abs(cardCenter - center);
        if (d < bestDist) { bestDist = d; bestIdx = i; }
      }
      if (bestIdx !== lastIdx) {
        lastIdx = bestIdx;
        setActive(bestIdx);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(recompute);
    };

    recompute();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollTo = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'));
    const target = cards[Math.max(0, Math.min(cards.length - 1, idx))];
    if (!target) return;
    const left = target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
    el.scrollTo({ left, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenIdx(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIdx]);

  const currentReel: Reel | null = useMemo(
    () => (openIdx === null ? null : reels[openIdx] ?? null),
    [openIdx],
  );

  return (
    <section id="reels" className="block">
      <div className="container-x">
        <div className="mb-10 reveal-up reveal-up--in">
          <SectionLabel>Лучшие ролики</SectionLabel>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 md:-mx-12 md:px-12"
            role="region"
            aria-label="Демо-ролики, горизонтальная карусель"
          >
            {reels.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  type="button"
                  key={r.id}
                  data-card
                  onClick={() => setOpenIdx(i)}
                  aria-label={`Открыть ${r.title}`}
                  className={clsx(
                    'group relative flex-shrink-0 snap-center overflow-hidden bg-bg1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    'rounded-[1.75rem] border',
                    'h-[480px] w-[270px] md:h-[560px] md:w-[315px]',
                    isActive
                      ? 'scale-[1.02] border-[rgba(255,204,0,0.35)] opacity-100 shadow-[0_0_48px_rgba(255,204,0,0.18)]'
                      : 'scale-[0.94] border-white/[0.06] opacity-50 hover:opacity-80',
                  )}
                >
                  <Image
                    src={r.poster}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 315px"
                    className="object-cover"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={clsx(
                        'flex h-16 w-16 items-center justify-center rounded-full backdrop-blur-md transition-transform duration-200 group-hover:scale-110',
                        isActive
                          ? 'bg-accent text-bg0 shadow-[0_0_36px_rgba(255,204,0,0.55)]'
                          : 'border border-white/30 bg-black/40 text-white',
                      )}
                    >
                      <PlayIcon />
                    </span>
                  </div>
                  <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.12em] text-white/85">
                    {r.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ArrowBtn dir="prev" disabled={active === 0} onClick={() => scrollTo(active - 1)} />
              <ArrowBtn dir="next" disabled={active === total - 1} onClick={() => scrollTo(active + 1)} />
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-text2 tabular">
              <span className="text-accent">{String(active + 1).padStart(2, '0')}</span>
              <span className="mx-2 text-text3">/</span>
              {String(total).padStart(2, '0')}
            </span>
          </div>

          {isTouch && (
            <div className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-text2">
              ← свайп →
            </div>
          )}
        </div>
      </div>

      {currentReel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentReel.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-md"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-all hover:scale-105 hover:border-accent hover:text-accent"
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
          >
            ✕
          </button>
          <div
            className="relative flex h-[min(86vh,820px)] w-auto max-w-full"
            style={{ aspectRatio: '9 / 16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={currentReel.id}
              src={currentReel.src}
              poster={currentReel.poster}
              className="h-full w-full rounded-[1.75rem] bg-black object-cover shadow-[0_0_80px_rgba(255,204,0,0.25)]"
              autoPlay
              loop
              playsInline
              controls
              preload="auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ArrowBtn({ dir, onClick, disabled }: { dir: 'prev' | 'next'; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      aria-label={dir === 'prev' ? 'Предыдущий ролик' : 'Следующий ролик'}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex h-11 w-11 items-center justify-center rounded-full border bg-transparent transition-all duration-200',
        disabled
          ? 'cursor-not-allowed border-white/10 text-text3 opacity-50'
          : 'border-white/15 text-text0 hover:border-accent hover:text-accent hover:shadow-[0_0_24px_rgba(255,204,0,0.25)]',
      )}
    >
      <span aria-hidden className="text-lg">{dir === 'prev' ? '‹' : '›'}</span>
    </button>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
    </svg>
  );
}
