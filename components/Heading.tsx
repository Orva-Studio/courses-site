import type { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="mx-auto max-w-screen-lg font-display text-4xl md:text-7xl sm:text-5xl text-center mb-12 px-4">
      {children}
    </h1>
  );
}
