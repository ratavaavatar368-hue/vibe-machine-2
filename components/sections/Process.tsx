'use client';

import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { steps } from '@/data/steps';

export function Process() {
  return (
    <section id="process" className="block relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Процесс</SectionLabel>
        </Reveal>
        <Reveal delay={80} as="h2" className="h-display mt-5 max-w-[20ch] text-[clamp(2rem,4.5vw,4rem)]">
          Как мы <span className="text-gradient-hero">работаем.</span>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 70}
              as="li"
              className="card-base relative flex h-full flex-col"
            >
              <div className="font-display text-[clamp(44px,4.5vw,56px)] font-bold leading-none tracking-tight text-gradient-hero tabular">
                {s.number}
              </div>
              <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-text0">
                {s.title}
              </h3>
              {s.description && (
                <p className="mt-3 text-[14px] leading-relaxed text-text1">
                  {s.description}
                </p>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
