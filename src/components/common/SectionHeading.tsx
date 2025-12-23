import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-muted-foreground text-lg leading-relaxed',
          centered && 'max-w-2xl mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
