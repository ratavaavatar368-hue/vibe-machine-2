'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { formats } from '@/data/formats';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function Formats() {
  return (
    <section
      id="formats"
      aria-labelledby="formats-title"
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
            <SectionLabel>Форматы</SectionLabel>
          </motion.div>
          <motion.h2
            id="formats-title"
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h2 mt-5 max-w-[20ch] text-text"
          >
            Шесть форматов. Один pipeline.
          </motion.h2>
          <motion.p
            variants={FADE}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-text-dim"
          >
            Под каждый формат — свой набор моделей и шаблонов сценария.
            Универсального ролика не бывает.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
        >
          {formats.map((f) => (
            <motion.li
              key={f.id}
              variants={FADE}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-bg-elev p-8 transition-all duration-200 hover:bg-bg-elev-2 md:p-10"
            >
              <div className="text-[32px] leading-none">{f.emoji}</div>
              <h3 className="h3 mt-5 text-text">{f.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-dim">
                {f.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
