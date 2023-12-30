import type { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="mx-auto max-w-screen-lg font-display text-3xl  md:text-7xl sm:text-5xl text-center text-zinc-700 mb-12">
      {children}
    </h1>
  );
}
