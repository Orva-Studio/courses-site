import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function TextBlock({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={twMerge('max-w-screen-lg font-light text-lg mb-14 px-4', className)}>{children}</div>;
}
