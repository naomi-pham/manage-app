import { HEADING } from "@/constants/interfaces";
import SectionImage from "./components/SectionImage";
import SectionTitle from "./components/SectionTitle";

const Banner = () => {
  return (
    <section className="container mx-auto mt-20 flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 text-center md:flex-row md:text-left">
      <SectionTitle
        heading={HEADING.H1}
        title="Bring everyone together to build better products."
        subtitle="Manage makes it simple for software teams to plan day-to-day tasks
        while keeping the larger team goals in view."
        hasButton
      />
      <SectionImage
        src="/landing/illustration-intro.svg"
        alt="illustration-intro"
        width={580}
        height={525}
      />
    </section>
  );
};

export default Banner;
