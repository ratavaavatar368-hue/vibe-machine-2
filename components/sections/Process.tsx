'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { steps, kpis } from '@/data/steps';

const FADE = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export function Process() {
  return (
    <section id="process" className="block relative overflow-hidden">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div variants={FADE} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionLabel>Процесс</SectionLabel>
          </motion.div>
          <motion.h2
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-display mt-5 max-w-[20ch] text-[clamp(2rem,4.5vw,4rem)]"
          >
            Пять шагов от&nbsp;брифа{' '}
            <span className="text-gradient-hero">до&nbsp;потока.</span>
          </motion.h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-5 md:gap-x-6"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.id}
              variants={FADE}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${i > 0 ? 'md:pl-6 md:border-l md:border-white/[0.08]' : ''}`}
            >
              <div className="font-display text-[clamp(48px,5vw,64px)] font-bold leading-none tracking-tight text-gradient-hero tabular">
                {s.number}
              </div>
              <h3 className="mt-5 font-display text-[18px] font-bold leading-tight text-text0">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text1">
                {s.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {kpis.map((k) => (
            <div key={k.label} className="card-base relative overflow-hidden">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/[0.06] blur-3xl" />
              <div className="relative font-display text-[clamp(40px,5vw,64px)] font-bold leading-none tracking-tight text-text0 tabular">
                {k.value}
              </div>
              <div className="relative mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-text2">
                {k.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
