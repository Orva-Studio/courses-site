import { type ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

export default function Button({ children, href, external, className }: ButtonProps) {
  return (
    <a
      href={href}
      className={twMerge(
        'flex gap-2 px-6 py-3 border text-base font-medium rounded-md transition-all justify-center items-center',
        className
      )}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {external && <ExternalLink />}
    </a>
  );
}
