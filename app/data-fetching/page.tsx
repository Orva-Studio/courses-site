import BackLink from '@/components/BackLink';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import TextBlock from '@/components/TextBlock';
import Link from 'next/link';

const PREVIEW_URL = 'https://richardoliverbray.podia.com/mastering-data-fetching-in-react';
export function metadata() {
  return {
    title: 'Mastering Data Fetching in React',
    description: 'Learn how to fetch data in React using the latest techniques.',
  };
}

export default function Page() {
  return (
    <>
      <BackLink />
      <Heading>
        Mastering Data Fetching in <span className="text-teal-700">React</span>
      </Heading>
      <TextBlock>
        <p>
          This course is currently in development with <a href="https://www.newline.co/">/newline</a>. To be notified when it's ready, please sign up to the <Link href="/links">newsletter</Link>.
        </p>
      </TextBlock>
    </>
  );
}
