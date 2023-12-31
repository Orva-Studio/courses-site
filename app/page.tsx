import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <>
      <Heading>
        The <span className="text-teal-700">skills</span> you need for a software engineer job
      </Heading>
      <div className="max-w-screen-lg font-light text-lg mb-14 px-4 text-center">
        <p>
          Getting a tech job isn't easy. Companies want someone who can hit the ground running not someone who needs to
          be trained. This site will teach you the skills you need to get a job with a focus on TypeScript, React and
          PostgreSQL.
        </p>
      </div>
      <h2 className="mb-12 text-3xl font-light">Video Courses</h2>
      <section className="grid grid-rows-2 grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 px-4 gap-4 max-w-screen-xl">
        <article>
          <Link href="/cv">
            <Image
              src="/courses/cv.png"
              alt="Write the Best Software Engineer CV/Resume Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Write the Best Software Engineer <span className="text-teal-700">CV/Resume</span>
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
              Mastering Data Fetching in <span className="text-teal-700">React</span>
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
              Demystifying Authentication in <span className="text-teal-700">React</span> w/{' '}
              <span className="text-teal-700">Express</span> & <span className="text-teal-700">PostgreSQL</span>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/testing">
            <Image
              src="/courses/coming_soon_2.png"
              alt="Understanding E2E Testing with with Cypress Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Understanding E2E Testing with <span className="text-teal-700">Cypress</span>
            </div>
          </Link>
        </article>
        <article>
          <Link href="/testing">
            <Image
              src="/courses/coming_soon_2.png"
              alt="Mastering Data Fetching in React Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              State Management Deep Dive with <span className="text-teal-700">Redux Toolkit</span>
            </div>
          </Link>
        </article>
        <article></article>
      </section>
    </>
  );
}
