import type { ReactNode } from 'react';

export default function Highlight({ children, bold = false }: { children: ReactNode; bold?: boolean }) {
  const HTMLTag = bold ? 'strong' : 'span';
  return <HTMLTag className="text-teal-700">{children}</HTMLTag>;
}
