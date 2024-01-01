import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'], variable: '--font-poppins' });

export const metadata: Metadata = {
  metadataBase: new URL('https://courses.orva.studio'),
  title: { default: 'The skills you need for a software engineering job', template: '%s - Orva Courses' },
  description: 'Giving you the skills to land your first software engineering job.',
  openGraph: {
    type: 'website',
    url: 'https://courses.orva.studio',
    title: 'The skills you need for an engineering job',
    description: 'Giving you the skills to land your first software engineering job.',
    images: [
      {
        url: 'orva_og.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-stone-100`}>
        <nav className="flex px-4 items-center justify-between mx-auto max-w-screen-xl mt-12 ">
          <div className="w-32">
            <Link href="/">
              <Image src="/orva.svg" alt="Orva Logo" width={369.99} height={106.19} priority />
            </Link>
          </div>
          <a href="https://www.orva.studio/" rel="noopener noreferrer" target="_blank">
            Studio
          </a>
        </nav>
        <main className="flex min-h-screen flex-col items-center pt-20">{children}</main>
        <footer className="text-center font-light my-8">&copy; Orva Studio Limited</footer>
        <Script id="posthog">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('phc_ntZ5DcInUnNjfuaAM9DTAmBJifOiKC6MxqrslGwkQJN',{api_host:'https://app.posthog.com'})`}
        </Script>
      </body>
    </html>
  );
}
