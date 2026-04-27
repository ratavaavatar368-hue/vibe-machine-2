import { siteConfig } from '@/data/config';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-text0">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
          VIBE MACHINE
        </div>
        <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-text3">
          © 2026 — Vertical video factory
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-text1">
          <a
            href={siteConfig.tgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Telegram-бот
          </a>
          <a href="#" className="transition-colors hover:text-accent">Политика</a>
          <a href="#" className="transition-colors hover:text-accent">Оферта</a>
        </nav>
      </div>
    </footer>
  );
}
