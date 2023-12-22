import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';

export default function Home() {
  return (
    <>
      <Heading>
        The <span className="text-teal-600">skills</span> you need for a software engineer job
      </Heading>
      <h2 className="mb-12 text-3xl font-light">Courses</h2>
      <section className="grid grid-rows-2 grid-cols-3 gap-4 max-w-screen-xl">
        <article>
          <Link href="/cv">
            <Image
              src="/courses/cv.png"
              alt="Write the Best Software Engineer CV/Resume Course Image"
              width={1280}
              height={720}
            />
            <div className="mt-4 text-l sm:text-xl">
              Write the Best Software Engineer <span className="text-teal-600">CV/Resume</span>
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
              Mastering Data Fetching in <span className="text-teal-600">React</span>
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
              Demystifying Authentication in <span className="text-teal-600">React</span> w/{' '}
              <span className="text-teal-600">Express</span> & <span className="text-teal-600">PostgreSQL</span>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
}
