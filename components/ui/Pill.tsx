import clsx from 'clsx';

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-border bg-transparent px-3.5 py-2 text-[13px] text-text transition-colors duration-200 hover:border-border-strong',
        className,
      )}
    >
      {children}
    </span>
  );
}
