'use client';

import { motion } from 'framer-motion';
import { Button, TelegramIcon } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { siteConfig } from '@/data/config';

const FADE = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export function FinalCTA() {
  return (
    <section id="cta" className="block relative overflow-hidden">
      <div className="plasma" aria-hidden />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div variants={FADE} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionLabel>Готовы начать?</SectionLabel>
          </motion.div>

          <motion.h2
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-display mt-6 max-w-[820px] text-[clamp(2rem,5vw,5rem)]"
          >
            Пока вы читали — алгоритм выкатил{' '}
            <span className="text-gradient-hero">50 роликов</span>{' '}
            в вашей нише. Без вас.
          </motion.h2>

          <motion.p
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[460px] text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-text1"
          >
            Обсудим запуск в&nbsp;Telegram. Ответим в&nbsp;течение часа.
          </motion.p>

          <motion.div
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Button
              href={siteConfig.tgLink}
              variant="primary"
              size="lg"
              glow
              analyticsLabel="final"
            >
              <TelegramIcon size={20} />
              Написать в Telegram
            </Button>
          </motion.div>

          <motion.p
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 font-mono text-[12px] uppercase tracking-[0.14em] text-text2"
          >
            Бриф займёт 5 минут. Без обязательств.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
