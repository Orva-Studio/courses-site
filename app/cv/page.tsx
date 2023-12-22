import Heading from '@/components/Heading';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Link href="/" className="font-light text-lg underline mb-12">
        👈 Go Back
      </Link>
      <Heading>
        Write the Best Software Engineer <span className="text-teal-600">CV/Resume</span>
      </Heading>

      <iframe
        width="768"
        height="432"
        className="rounded-xl mb-12"
        src="https://www.youtube.com/embed/SthycFOz79c?si=C9OJfDWLr-h9gVFU&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <a href="https://richardoliverbray.podia.com/how-to-write-the-best-software-engineer-cv-resume/buy">
        Get the course / Free Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>

      <div className="max-w-screen-lg font-light text-lg">
        <p>
          Getting a job in software engineering is hard. You have to first have the right skills, then practise
          interview questions and then pass the coding interview. But before all of that, you have to get the interview.
          And to get the interview, you need to have a good CV/Resume.{' '}
        </p>
        <p>This course will teach you how to write a good CV/Resume that will get you more interviews.</p>
      </div>

      <h2>Lessons</h2>
      <h2>Your Instructor</h2>
      <h2>Get the Course</h2>
      <h2>FAQ</h2>
    </>
  );
}
