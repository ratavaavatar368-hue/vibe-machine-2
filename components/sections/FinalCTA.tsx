'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { siteConfig } from '@/data/config';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function FinalCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-title"
      className="border-t border-border"
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
            <SectionLabel>Готовы начать?</SectionLabel>
          </motion.div>

          <motion.h2
            id="cta-title"
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h2 mt-5 max-w-[800px] text-text"
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Пока вы читали — алгоритм выкатил 50 роликов в вашей нише. Без вас.
          </motion.h2>

          <motion.p
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[560px] text-[18px] leading-relaxed text-text-dim"
          >
            Обсудим запуск в Telegram. Ответим в течение часа.
          </motion.p>

          <motion.div
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Button
              href={siteConfig.tgLink}
              variant="primary"
              size="lg"
              analyticsLabel="final"
            >
              Написать в Telegram →
            </Button>
          </motion.div>

          <motion.p
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mono-label mt-6 block"
          >
            Бриф займёт 5 минут. Без обязательств.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
