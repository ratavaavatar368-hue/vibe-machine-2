import clsx from 'clsx';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  /** With ⚡ accent prefix */
  bolt?: boolean;
}

export function SectionLabel({ children, className, bolt = true }: SectionLabelProps) {
  return (
    <span className={clsx(bolt ? 'eyebrow' : 'eyebrow-mono', 'inline-flex', className)}>
      {children}
    </span>
  );
}
