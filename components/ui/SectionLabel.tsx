import clsx from 'clsx';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={clsx('mono-label inline-block', className)}>{children}</span>
  );
}
