import BackLink from '@/components/BackLink';
import Heading from '@/components/Heading';

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
      <BackLink />
      <Heading>
        Demystifying Authentication in <span className="text-teal-700">React</span> w/ Express & PostgreSQL
      </Heading>
      <div className="max-w-screen-md font-light text-lg mb-14 px-4">
        <p>This course is currently in development.</p>
      </div>
    </>
  );
}
