'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Pill } from '../ui/Pill';
import { SectionLabel } from '../ui/SectionLabel';
import { siteConfig } from '@/data/config';

const PLATFORMS = ['TikTok', 'Reels', 'Shorts', 'VK Видео'];

const BULLETS = [
  {
    emoji: '🎬',
    title: 'Самые свежие AI-модели генерации',
    sub: 'Kling, Runway, Veo, Sora — выбираем под формат, не под бюджет.',
  },
  {
    emoji: '🕵',
    title: 'Без AI-метаданных — алгоритмы не палят',
    sub: 'Ролики проходят как живая съёмка. Охват не режется.',
  },
  {
    emoji: '📈',
    title: 'Среди клиентов — блогеры-миллионники',
    sub: 'Делаем для тех, кто умеет считать выручку с просмотра.',
  },
];

const FADE = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative pt-40 md:pt-48"
    >
      <div className="mx-auto max-w-container px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div variants={FADE} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <SectionLabel>Фабрика вертикального видео</SectionLabel>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h1 mt-5 max-w-[14ch] text-text"
          >
            Контент, неотличимый от съёмки. От 50 до 150 роликов в месяц.
          </motion.h1>

          <motion.p
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[560px] text-[18px] leading-relaxed text-text-dim md:text-[20px]"
          >
            Вертикальный контент для Reels, Shorts, TikTok. Ваше участие — ноль.
            Метаданных AI нет — алгоритмы видят живое видео.
          </motion.p>

          <motion.div
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Button
              href={siteConfig.tgLink}
              variant="primary"
              size="lg"
              analyticsLabel="hero"
            >
              Запустить поток
            </Button>
            <a
              href="#reels"
              className="text-[15px] text-text-dim transition-colors hover:text-text"
            >
              Смотреть примеры ↓
            </a>
          </motion.div>

          <motion.div
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14"
          >
            <SectionLabel className="mb-4 block">Раздаём на платформы</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <Pill key={p}>{p}</Pill>
              ))}
            </div>
          </motion.div>

          <motion.ul
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {BULLETS.map((b) => (
              <li key={b.title} className="max-w-sm">
                <div className="text-2xl leading-none">{b.emoji}</div>
                <div className="mt-3 text-[15px] font-semibold text-text">
                  {b.title}
                </div>
                <div className="mt-2 text-[14px] text-text-dim">{b.sub}</div>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div
          aria-hidden
          className="mt-24 flex items-center gap-4 text-text-mute md:mt-32"
        >
          <span className="h-px flex-1 bg-border md:flex-none md:w-16" />
          <span className="font-mono text-[12px] uppercase tracking-[0.1em]">
            Листай
          </span>
          <span className="h-px flex-1 bg-border md:flex-none md:w-16" />
        </div>
      </div>
    </section>
  );
}
