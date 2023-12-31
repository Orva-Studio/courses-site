import Button from '@/components/Button';
import Heading from '@/components/Heading';
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
      <Link href="/" className="font-light text-lg underline mb-12">
        👈 Go Back
      </Link>
      <Heading>
        Mastering Data Fetching in <span className="text-teal-700">React</span>
      </Heading>
      <div className="max-w-screen-md font-light text-lg mb-14 px-4">
        <p>
          This course is currently in development and when ready, will be priced between <strong>$30-$60</strong>.
        </p>
        <p> If you would like to be notified when it is ready, please join the waiting list. </p>
      </div>
      <section className="flex gap-4 mb-12">
        <Button href={PREVIEW_URL} external>
          Join the Waiting List
        </Button>
      </section>
    </>
  );
}
