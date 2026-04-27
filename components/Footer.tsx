import { siteConfig } from '@/data/config';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-container flex-col items-start justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-12">
        <div className="font-mono text-[13px] uppercase tracking-[0.1em] text-text">
          {siteConfig.brand}
        </div>
        <div className="text-[13px] text-text-mute">
          © 2026 {siteConfig.name}
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-text-dim">
          <a
            href={siteConfig.tgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            Telegram-бот
          </a>
          <a href="#" className="transition-colors hover:text-text">
            Политика
          </a>
          <a href="#" className="transition-colors hover:text-text">
            Оферта
          </a>
        </nav>
      </div>
    </footer>
  );
}
