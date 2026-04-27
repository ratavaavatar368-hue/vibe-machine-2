'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { formats } from '@/data/formats';

const FADE = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export function Formats() {
  return (
    <section id="formats" className="block">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div variants={FADE} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <SectionLabel>Форматы</SectionLabel>
          </motion.div>
          <motion.h2
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-display mt-5 max-w-[20ch] text-[clamp(2rem,4.5vw,4rem)]"
          >
            Шесть форматов. <span className="text-gradient-hero">Один pipeline.</span>
          </motion.h2>
          <motion.p
            variants={FADE}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[600px] text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-text1"
          >
            Под каждый формат — свой набор моделей и шаблонов сценария.
            Универсального ролика не бывает.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ staggerChildren: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {formats.map((f) => (
            <motion.li
              key={f.id}
              variants={FADE}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="card-base group"
            >
              <div className="text-[36px] leading-none transition-transform duration-300 group-hover:scale-110">
                {f.emoji}
              </div>
              <h3 className="mt-5 font-display text-[20px] font-bold tracking-tight text-text0">
                {f.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-text1">
                {f.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
