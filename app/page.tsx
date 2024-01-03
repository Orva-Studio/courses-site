import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import Highlight from '@/components/Highlight';
import TextBlock from '@/components/TextBlock';

export default function Home() {
  return (
    <>
      <Heading>
        The <Highlight>skills</Highlight> you need for a software engineer job
      </Heading>
      <TextBlock className="text-center">
        <p>
          Getting your first software engineer job is hard! Companies want someone who can hit the ground running not
          someone who needs to be trained. This site will teach you the skills you need to get a job with a focus on{' '}
          <Highlight bold>TypeScript</Highlight>, <Highlight bold>React</Highlight> and{' '}
          <Highlight bold>PostgreSQL</Highlight>.
        </p>
      </TextBlock>
      <h2 className="mb-8 text-3xl font-light">Courses</h2>
      <section className="grid grid-rows-2 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 px-4 gap-x-4 gap-y-8 max-w-screen-xl">
        <article>
          <Link href="/cv">
            <Image
              src="/courses/cv.png"
              alt="Write the Best Software Engineer CV/Resume Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Write the Best Software Engineer <Highlight>CV/Resume</Highlight>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/data-fetching">
            <Image
              src="/courses/coming_soon_1.png"
              alt="Mastering Data Fetching in React Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Mastering Data Fetching in <Highlight>React</Highlight>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/authentication">
            <Image
              src="/courses/coming_soon_2.png"
              alt="Mastering Data Fetching in React Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Demystifying Authentication in <Highlight>React</Highlight> w/ <Highlight>Express</Highlight> &{' '}
              <Highlight>PostgreSQL</Highlight>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/testing">
            <Image
              src="/courses/coming_soon_3.png"
              alt="Understanding E2E Testing with with Cypress Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Understanding E2E Testing with <Highlight>Cypress</Highlight>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/state-management">
            <Image
              src="/courses/coming_soon_4.png"
              alt="State Management Deep Dive with Redux Toolkit Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              State Management Deep Dive with <Highlight>Redux Toolkit</Highlight>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/fullstack-ai">
            <Image
              src="/courses/coming_soon_5.png"
              alt="Fullstack AI application with Next.js Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Fullstack AI application with <Highlight>Next.js</Highlight>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
}
