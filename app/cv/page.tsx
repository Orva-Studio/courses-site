import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import Heading from '@/components/Heading';
import SubHeading from '@/components/SubHeading';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Check } from 'lucide-react';

const PREVIEW_URL = 'https://richardoliverbray.podia.com/how-to-write-the-best-software-engineer-cv-resume';
const BUY_URL = 'https://richardoliverbray.podia.com/how-to-write-the-best-software-engineer-cv-resume/buy';

export default function Page() {
  return (
    <>
      <Link href="/" className="font-light text-lg underline mb-12">
        👈 Go Back
      </Link>
      <Heading>
        Write the Best Software Engineer <span className="text-teal-600">CV/Resume</span>
      </Heading>

      <div className="max-w-3xl w-full px-4">
        <iframe
          className="w-full aspect-video rounded-xl mb-12"
          src="https://www.youtube.com/embed/SthycFOz79c?si=C9OJfDWLr-h9gVFU&amp;controls=0"
          title="Write the Best Software Engineer CV Teaser"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <section className="flex gap-4 mb-12">
        <ButtonPrimary href="#getCourse">Get the course</ButtonPrimary>
        <ButtonSecondary href={PREVIEW_URL} external>
          Free Preview
        </ButtonSecondary>
      </section>

      <div className="max-w-screen-lg font-light text-lg mb-14 px-4">
        <p>
          Getting a job in software engineering is hard. You have to first have the right skills, then practise
          interview questions and then pass the coding interview. But before all of that, you have to get the interview.
          And to get the interview, you need to have a good CV/Resume.{' '}
        </p>
        <p>
          This course will teach you how to write a good CV/Resume that will increase the chance of you landing that
          interview.
        </p>
      </div>

      <section id="lessons" className="text-center mb-16">
        <SubHeading>Lessons</SubHeading>
        <div className="grid grid-rows-2 grid-cols-3 gap-4 w-screen max-w-screen-lg text-xl">
          <article>Who are you writing for?</article>
          <article>How to structure your CV</article>
          <article>Writing your CV</article>
          <article>Get experience without a job</article>
          <article>How to apply for jobs</article>
          <article>Should you write a cover letter?</article>
          <article>CV Reviews</article>
          <article className="text-teal-700">and more...</article>
        </div>
      </section>
      <section className="max-w-screen-lg  mb-14">
        <SubHeading className="text-center">Your Instructor</SubHeading>
        <div className="flex items-center flex-wrap  md:flex-nowrap">
          <article className="font-light text-lg px-4">
            <p>
              I'm <a href="https://robray.dev/">Richard Oliver Bray</a>, a passionate full-stack developer with over a
              decade of professional experience.
            </p>
            <p>
              {' '}
              I really enjoy writing code and also enjoy sharing my knowledge through teaching code to lovely people
              like you on platforms such as <a href="https://www.youtube.com/c/RichardBray">YouTube</a>,{' '}
              <a href="https://teamtreehouse.com/profiles/richardbray2">Treehouse</a>,{' '}
              <a href="https://www.tiktok.com/@richardoliverbray">TikTok</a>, and{' '}
              <a href="https://www.instagram.com/richobray/">Instagram</a>.
            </p>
            <p>I'm looking forward to learning together 💪</p>
            <div className="w-32">
              <Image src="rbray/signature.png" alt="Richard Oliver Bray Signature" width={231} height={130} />
            </div>
          </article>
          <article className="px-4">
            <Image className="rounded-full" src="rbray/pic.png" alt="Richard Oliver Bray" width={379} height={379} />
          </article>
        </div>
      </section>
      <section id="getCourse" className="mb-14">
        <SubHeading className="text-center mb-4">Get the Course</SubHeading>

        <div className="border rounded px-12 py-8">
          <div className="text-teal-700 text-7xl text-center mb-4">$20</div>
          <ul className="space-y-4 mb-4">
            <li className="flex gap-2">
              <Check color="rgb(15 118 110)" />
              Over 1 hour of content
            </li>
            <li className="flex gap-2">
              <Check color="rgb(15 118 110)" />
              English transcript and subtitles
            </li>
            <li className="flex gap-2">
              <Check color="rgb(15 118 110)" />2 CV/Resume Canva Templates
            </li>
            <li className="flex gap-2">
              <Check color="rgb(15 118 110)" />
              10 Real World Project Ideas
            </li>
            <li className="flex gap-2">
              <Check color="rgb(15 118 110)" />
              Lifetime Updates
            </li>
          </ul>
          <ButtonPrimary href={BUY_URL} external>
            Get the course
          </ButtonPrimary>
          <p></p>
        </div>
      </section>

      {/* <SubHeading>FAQ</SubHeading>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is there a refund policy?</AccordionTrigger>
          <AccordionContent>
            Yes. If you're unsatisfied with your purchase, you can request a full refund by emailing hello@orva.studio.
            To be eligible, you must not complete more than 30% of the course.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </>
  );
}
