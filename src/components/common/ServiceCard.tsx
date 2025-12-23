import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, href = '/services', className }: ServiceCardProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        'group card-corporate p-6 md:p-8 flex flex-col h-full',
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
        {description}
      </p>
      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
        Learn More
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ServiceCard;
