import clsx from 'clsx';

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return <span className={clsx('platform-chip', className)}>{children}</span>;
}
