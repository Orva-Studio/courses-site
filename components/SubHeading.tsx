import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SubHeading({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={twMerge('text-4xl font-bold text-gray-900 mb-12', className)}>{children}</h2>;
}
