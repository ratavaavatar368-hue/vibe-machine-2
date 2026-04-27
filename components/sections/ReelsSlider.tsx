'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SectionLabel } from '../ui/SectionLabel';
import { reels, type Reel } from '@/data/reels';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

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

  const updateActive = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'));
    const center = el.scrollLeft + el.clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const cardCenter = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });
    setActive(bestIdx);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      el.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [updateActive]);

  const scrollTo = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'));
    const target = cards[Math.max(0, Math.min(cards.length - 1, idx))];
    if (!target) return;
    const left = target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
    el.scrollTo({ left, behavior: 'smooth' });
  }, []);

  // Esc to close modal
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null);
    };
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
    <section
      id="reels"
      aria-labelledby="reels-title"
      className="border-t border-border py-20 md:py-30"
      style={{ paddingTop: 'clamp(80px, 12vw, 120px)', paddingBottom: 'clamp(80px, 12vw, 120px)' }}
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div variants={FADE} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <SectionLabel>Demo Reel</SectionLabel>
          </motion.div>
          <motion.h2
            id="reels-title"
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h2 mt-5 max-w-[18ch] text-text"
          >
            Смотрите сами. Без описаний.
          </motion.h2>
        </motion.div>

        <div className="relative mt-12">
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
                    'group relative flex-shrink-0 snap-center overflow-hidden rounded-[12px] border bg-bg-elev transition-all duration-300 ease-out-quart',
                    'h-[480px] w-[270px] md:h-[534px] md:w-[300px]',
                    isActive
                      ? 'scale-100 border-border-strong opacity-100'
                      : 'scale-95 border-border opacity-60 hover:opacity-90',
                  )}
                >
                  <Image
                    src={r.poster}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 300px"
                    className="object-cover"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-transform duration-200 group-hover:scale-110">
                      <PlayIcon />
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-[0.08em] text-white/80">
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
            <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-text-mute tabular">
              Ролик {String(active + 1).padStart(2, '0')} из {String(total).padStart(2, '0')}
            </span>
          </div>

          {isTouch && (
            <div className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.08em] text-text-mute">
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-sm"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx(null);
            }}
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
              className="h-full w-full rounded-[12px] bg-black object-cover"
              autoPlay
              loop
              playsInline
              controls
              muted={false}
              preload="auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ArrowBtn({
  dir,
  onClick,
  disabled,
}: {
  dir: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={dir === 'prev' ? 'Предыдущий ролик' : 'Следующий ролик'}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-full border border-border bg-transparent text-text transition-all duration-200',
        disabled
          ? 'cursor-not-allowed opacity-40'
          : 'hover:border-border-strong hover:bg-bg-elev-2',
      )}
    >
      <span aria-hidden>{dir === 'prev' ? '‹' : '›'}</span>
    </button>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
    </svg>
  );
}
