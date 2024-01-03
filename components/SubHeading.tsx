import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SubHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={twMerge('text-2xl sm:text-4xl font-bold mb-6 sm:mb-12', className)}>{children}</h2>;
}
