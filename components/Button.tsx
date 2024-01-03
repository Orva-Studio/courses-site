import { type ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  type?: 'primary' | 'secondary';
}

export default function Button({ children, href, external, className, type = 'primary' }: ButtonProps) {
  const typeStyles = {
    primary: 'text-white bg-teal-700 hover:bg-teal-800',
    secondary: 'text-teal-700 border-teal-700 border-2 hover:bg-gray-50',
  };
  return (
    <a
      role="button"
      draggable="false"
      href={href}
      className={twMerge([
        'flex gap-2 px-6 py-3 border font-medium rounded-md transition-all justify-center items-center',
        typeStyles[type],
        className,
      ])}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      {external && <ExternalLink />}
    </a>
  );
}
