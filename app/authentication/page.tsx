import ButtonPrimary from '@/components/ButtonPrimary';
import Heading from '@/components/Heading';
import Link from 'next/link';

const PREVIEW_URL = 'https://richardoliverbray.podia.com/mastering-data-fetching-in-react';
export function metadata() {
  return {
    title: 'Demystifying Authentication in React',
    description: 'Learn how to fetch data in React using the latest techniques.',
  };
}

export default function Page() {
  return (
    <>
      <Link href="/" className="font-light text-lg underline mb-12">
        👈 Go Back
      </Link>
      <Heading>
        Demystifying Authentication in <span className="text-teal-600">React</span> w/ Express & PostgreSQL
      </Heading>
      <div className="max-w-screen-md font-light text-lg mb-14 px-4">
        <p>This course is currently in development.</p>
      </div>
    </>
  );
}
