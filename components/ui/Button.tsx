'use client';

import clsx from 'clsx';

type Variant = 'primary' | 'ghost';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
  analyticsLabel?: string;
  external?: boolean;
}

function trackClick(label?: string) {
  if (!label || typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('cta_click', { detail: { label } }));
  const w = window as unknown as { ym?: (id: number, action: string, name: string) => void };
  const id = process.env.NEXT_PUBLIC_YM_ID;
  if (w.ym && id) {
    try { w.ym(Number(id), 'reachGoal', `cta_${label}`); } catch { /* ignore */ }
  }
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  glow = false,
  children,
  className,
  analyticsLabel,
  external = true,
}: ButtonProps) {
  const baseCls = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const sizeCls = size === 'lg' ? 'text-[1.1875rem] px-9 py-[1.125rem] min-h-[60px]' : '';
  const cls = clsx(baseCls, sizeCls, glow && variant === 'primary' && 'pulse-glow', className);

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
      onClick={() => { trackClick(analyticsLabel); onClick?.(); }}
      data-analytics={analyticsLabel}
      className={cls}
    >
      {children}
    </button>
  );
}

export function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.5 4.5 2.7 11.4c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.9 5.6c.2.6.4.8.9.8.4 0 .6-.2.8-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8L23 6.4c.3-1.3-.5-1.9-1.5-1.4Zm-3.7 4.4-9.1 8.2-.4 3.8-1.7-5.2 11.2-7.1c.5-.3 1-.1.6.3Z" />
    </svg>
  );
}
