import { ExternalLink } from 'lucide-react';

export interface PageLink {
  title: JSX.Element | string;
  href: string;
  internal?: boolean;
}

export default function PageLinks({ links }: { links: PageLink[] }) {
  return (
    <section className="*:flex *:gap-2 *:text-lg *:sm:text-2xl *:mb-6 *:px-4 *:underline *:justify-center">
      {links.map((link, index) => (
        <a
          href={link.href}
          key={index}
          className="hover:decoration-4 *:text-center"
          {...(!link.internal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          <div>{link.title}</div>
          {!link.internal && <ExternalLink />}
        </a>
      ))}
    </section>
  );
}
