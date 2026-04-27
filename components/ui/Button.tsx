'use client';

import clsx from 'clsx';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  /** Analytics label used by data-analytics attribute and (optionally) Yandex.Metrika reachGoal */
  analyticsLabel?: string;
  external?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-btn font-medium transition-all duration-200 ease-out-quart will-change-transform select-none whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg hover:opacity-90 hover:-translate-y-px active:translate-y-0 active:opacity-95',
  ghost:
    'text-text-dim hover:text-text border border-border hover:border-border-strong bg-transparent hover:bg-bg-elev-2',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-[15px] min-h-[44px]',
  lg: 'px-10 py-5 text-[17px] min-h-[56px]',
};

function trackClick(label?: string) {
  if (!label) return;
  // Custom event on window for any listener (GA4, Plausible, custom)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cta_click', { detail: { label } }));
    // Yandex.Metrika goal (no-op if ym is not loaded)
    const w = window as unknown as { ym?: (id: number, action: string, name: string) => void };
    const id = process.env.NEXT_PUBLIC_YM_ID;
    if (w.ym && id) {
      try {
        w.ym(Number(id), 'reachGoal', `cta_${label}`);
      } catch {
        /* ignore */
      }
    }
  }
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  analyticsLabel,
  external = true,
}: ButtonProps) {
  const cls = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={() => trackClick(analyticsLabel)}
        data-analytics={analyticsLabel}
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        trackClick(analyticsLabel);
        onClick?.();
      }}
      data-analytics={analyticsLabel}
      className={cls}
    >
      {children}
    </button>
  );
}
