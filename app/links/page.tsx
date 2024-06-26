import { TextBlock, Heading, Highlight, BackLink, SubHeading } from "@/components/index";
import type { PageLink } from "./components/PageLinks";
import type { Metadata } from "next";
import PageLinks from "./components/PageLinks";

export const metadata: Metadata = {
  title: "Helpful Links for Software Engineers",
  description: "Links to recourses that can help you on your development journey",
};

const mainLinks: PageLink[] = [
  {
    title: (
      <>
        🤩 Subscribe to the <Highlight>Newsletter</Highlight>
      </>
    ),
    href: "/newsletter",
    internal: true,
  },
  {
    title: (
      <>
        Write the Best Software Engineer <Highlight>CV/Resume</Highlight>
      </>
    ),
    href: "/cv",
    internal: true,
  },
  {
    title: (
      <>
        ⭐️ Check if you are <Highlight>developer ready</Highlight>{" "}
      </>
    ),
    href: "https://richardoliverbray.podia.com/developer-ready-questions",
  },
  {
    title: (
      <>
        Get 10% off Grovemade Products: <Highlight>ROBRAY10</Highlight>
      </>
    ),
    href: "https://grovemade.com/?rfsn=7437437.efba388",
  },
  {
    title: "Check out MightyMeld",
    href: "https://www.mightymeld.com/",
  },
];

const otherLinks: PageLink[] = [
  {
    title: (
      <>
        Get Wallaby for <Highlight>VSCode</Highlight>
      </>
    ),
    href: "https://wallabyjs.com/?referrer=RichardBray",
  },
  {
    title: (
      <>
        Get Quokka for <Highlight>VSCode</Highlight>
      </>
    ),
    href: "https://quokkajs.com/?referrer=RichardBray",
  },
  {
    title: (
      <>
        Learn more about <Highlight>CSS Variables</Highlight>{" "}
      </>
    ),
    href: "https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/",
  },
  {
    title: (
      <>
        Get 20% off Coddy Premium: <Highlight>ROBRAY20</Highlight>{" "}
      </>
    ),
    href: "https://coddy.tech/",
  },
  {
    title: "Learn more about Next-Video",
    href: "https://next-video.dev/",
  },
];

export default function Page() {
  return (
    <>
      <BackLink />
      <Heading>Links</Heading>
      <TextBlock className="text-center">
        <p>Links to recourses that can help you on your development journey.</p>
      </TextBlock>
      <section className="mb-12">
        <SubHeading className="text-center">Main Links</SubHeading>
        <PageLinks links={mainLinks} />
      </section>
      <SubHeading>Other Links</SubHeading>
      <PageLinks links={otherLinks} />
    </>
  );
}
