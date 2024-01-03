import BackLink from '@/components/BackLink';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import TextBlock from '@/components/TextBlock';

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
          This course is currently in development and when ready, will be priced between <strong>$30-$60</strong>.
        </p>
        <p> If you would like to be notified when it is ready, please join the waiting list. </p>
      </TextBlock>
      <section className="flex gap-4 mb-12">
        <Button href={PREVIEW_URL} external>
          Join the Waiting List
        </Button>
      </section>
    </>
  );
}
