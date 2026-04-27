'use client';

import { Reveal } from '../ui/Reveal';
import { Button, TelegramIcon } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { siteConfig } from '@/data/config';

export function FinalCTA() {
  return (
    <section id="cta" className="block relative overflow-hidden">
      <div className="plasma" aria-hidden />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <SectionLabel>Готовы начать?</SectionLabel>
        </Reveal>

        <Reveal delay={80} as="h2" className="h-display mt-6 max-w-[18ch] text-[clamp(2.25rem,5vw,5rem)]">
          Обсудить сотрудничество{' '}
          <span className="text-gradient-hero">в&nbsp;Telegram.</span>
        </Reveal>

        <Reveal delay={160} className="mt-10">
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
        </Reveal>

        <Reveal
          delay={220}
          as="p"
          className="mt-7 font-mono text-[12px] uppercase tracking-[0.14em] text-text2"
        >
          Бриф займёт 5 минут. Без обязательств.
        </Reveal>
      </div>
    </section>
  );
}
