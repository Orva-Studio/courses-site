import BackLink from '@/components/BackLink';
import Heading from '@/components/Heading';
import Highlight from '@/components/Highlight';

interface PageParams {
  params: {
    page: keyof typeof pageData;
  };
}
const pageData = {
  authentication: {
    title: 'Demystifying Authentication in React w/ Express & PostgreSQL',
    description: 'Learn how to implement authentication in React using Express and PostgreSQL.',
    titleJSX: (
      <>
        Demystifying Authentication in <Highlight>React</Highlight> w/ <Highlight>Express</Highlight> &{' '}
        <Highlight>PostgreSQL</Highlight>
      </>
    ),
  },
  testing: {
    title: 'Understanding E2E Testing with Cypress',
    description: 'Learn how to implement E2E testing in React using Cypress.',
    titleJSX: (
      <>
        Understanding E2E Testing with <Highlight>Cypress</Highlight>
      </>
    ),
  },
  'state-management': {
    title: 'State Management Deep Dive with Redux Toolkit',
    description: 'Learn how to implement state management in React using Redux Toolkit.',
    titleJSX: (
      <>
        State Management Deep Dive with <Highlight>Redux Toolkit</Highlight>
      </>
    ),
  },
  'fullstack-ai': {
    title: 'Fullstack AI application with Next.js',
    description: 'Learn how to build a fullstack AI application using Next.js and the Open AI API.',
    titleJSX: (
      <>
        Fullstack AI application with <Highlight>Next.js</Highlight>
      </>
    ),
  },
};

export function generateMetadata({ params }: PageParams) {
  return {
    title: pageData[params.page].title,
    description: pageData[params.page].description,
  };
}

export async function generateStaticParams() {
  return [{ page: 'authentication' }, { page: 'testing' }, { page: 'state-management' }, { page: 'fullstack-ai' }];
}

export default function Page({ params }: PageParams) {
  return (
    <>
      <BackLink />
      <Heading>{pageData[params.page].titleJSX}</Heading>
      <div className="max-w-screen-md font-light text-lg mb-14 px-4">
        <p>This course is currently in development.</p>
      </div>
    </>
  );
}
