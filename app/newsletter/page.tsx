import { Heading, Highlight, SubHeading, TextBlock } from "@/components";

export default function Page() {
  return (
    <>
      <div className="max-w-3xl w-full px-4 flex-d">
        <SubHeading className="text-center">
          Get access to the “Beginner Accelerator” program that teaches you the skills to start your journey in one of
          the most lucrative markets. Helping you <Highlight>quickly</Highlight> land a{" "}
          <Highlight>high-paying job</Highlight>
        </SubHeading>

        <TextBlock>
          <strong>THE BEGINNER ACCELERATOR PROGRAM:</strong>
          <p>
            <Highlight bold>1️⃣ 12 FREE Courses</Highlight>
          </p>
          <p>
            Your 12 FREE certified beginner courses have been <Highlight>personally handpicked</Highlight> by me to give
            you a head start in the journey of becoming a developer.
          </p>
          <p>
            <Highlight bold>2️⃣ My Senior Developer Notes</Highlight>
          </p>
          <p>
            Get exclusive access to ALL the notes I’ve taken over my 10+ years of experience as a senior developer, that
            to my knowledge no one else is giving away for free - if at all.
          </p>
          <p>
            <Highlight bold>3️⃣ BONUS: The 10 Best Real-World Project Ideas</Highlight>
          </p>
          <p>
            You can show in an interview so you can land your high-paying dream job - and finally escape the dreaded
            “tutorial purgatory”
          </p>
        </TextBlock>
        <SubHeading className="text-center">
          Beginners need beginner courses to succeed, not difficult and complicated mind mazes.
        </SubHeading>
        <TextBlock>
          <p>
            All of these courses have been personally verified by me to be beginner-friendly, and are exactly what you
            need as a beginner to take your career to the next level.
          </p>
          <p>No more wasting hours surfing the internet wondering if beginner courses even exist.</p>
          <p>No more being uncertain if AI will just end up replacing you in a few years.</p>
          <p>No more encountering “coders paralysis” before a vital coding session.</p>
          <p className="mb-4">
            I will personally send you the 12 courses, my 10+ years of notes, and the 10 real-world project ideas
            immediately, and completely FREE so you can jump start your developer journey and AI-proof your future.
          </p>

          <form
            action="https://richardoliverbray.podia.com/email_lists/487145/subscriptions"
            acceptCharset="UTF-8"
            method="post"
            className="flex gap-2 justify-center items-center font-light px-4 flex-col"
          >
            <input
              className="border-teal-700 mb-4 border-2 rounded-md px-3 py-2 min-w-36 w-full"
              type="email"
              name="email"
              required
              placeholder="Email"
            />
            <input
              className="px-6 py-2 border-teal-700 border-2 font-medium rounded-md transition-all text-white bg-teal-700 hover:bg-teal-800 cursor-pointer"
              type="submit"
              value="Yes! Send me over 10 years of exclusive knowledge and the BONUS!"
            />
          </form>
        </TextBlock>
      </div>
    </>
  );
}
