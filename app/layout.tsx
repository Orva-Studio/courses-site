import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init('phc_ntZ5DcInUnNjfuaAM9DTAmBJifOiKC6MxqrslGwkQJN', {
    api_host: 'https://us.posthog.com',
    capture_pageview: false,
  });
}

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Orva Courses',
  description: 'Giving you the skills to land your first job in tech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-stone-100`}>
        <nav className="px-4 mx-auto max-w-screen-xl mt-12 ">
          <div className="w-32">
            <Link href="/">
              <Image src="/orva.svg" alt="Orva Logo" width={369.99} height={106.19} priority />
            </Link>
          </div>
        </nav>
        <main className="flex min-h-screen flex-col items-center pt-20">{children}</main>
        <footer className="text-center font-light my-8">&copy; Orva Studio Limited</footer>
      </body>
    </html>
  );
}
