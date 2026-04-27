'use client';

import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { formats } from '@/data/formats';

export function Formats() {
  return (
    <section id="formats" className="block">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Форматы</SectionLabel>
        </Reveal>
        <Reveal delay={80} as="h2" className="h-display mt-5 max-w-[24ch] text-[clamp(2rem,4.5vw,4rem)]">
          Что у&nbsp;нас получается{' '}
          <span className="text-gradient-hero">лучше всего.</span>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.id} delay={i * 60} as="li" className="card-base group">
              <div className="text-[36px] leading-none transition-transform duration-300 group-hover:scale-110">
                {f.emoji}
              </div>
              <h3 className="mt-5 font-display text-[19px] font-bold leading-snug tracking-tight text-text0">
                {f.title}
              </h3>
              {f.description && (
                <p className="mt-3 text-[14.5px] leading-relaxed text-text1">{f.description}</p>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
