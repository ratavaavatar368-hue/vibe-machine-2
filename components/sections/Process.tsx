'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { steps, kpis } from '@/data/steps';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
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
            <SectionLabel>Процесс</SectionLabel>
          </motion.div>
          <motion.h2
            id="process-title"
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h2 mt-5 max-w-[18ch] text-text"
          >
            Пять шагов от брифа до потока.
          </motion.h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-5 md:gap-x-8 md:divide-x md:divide-border"
        >
          {steps.map((s, i) => (
            <motion.li
              key={s.id}
              variants={FADE}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative ${i > 0 ? 'md:pl-6 lg:pl-8' : ''}`}
            >
              <div className="font-mono text-[64px] font-medium leading-none tracking-tight text-text tabular">
                {s.number}
              </div>
              <h3 className="mt-5 text-[20px] font-semibold leading-tight text-text">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-dim">
                {s.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-2">
          {kpis.map((k) => (
            <div key={k.label} className="bg-bg-elev p-8 md:p-10">
              <div className="text-[clamp(40px,5vw,56px)] font-semibold leading-none tracking-tight text-text tabular">
                {k.value}
              </div>
              <div className="mono-label mt-4 block">{k.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
