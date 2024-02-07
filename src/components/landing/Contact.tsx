import { HEADING } from "@/constants/interfaces";
import Button from "../common/Button";
import SectionTitle from "../common/animation/SectionTitle";

const Contact = () => {
  return (
    <div className="mt-44 bg-primary-brightRed">
      <div className="container mx-auto flex min-h-[250px] max-w-7xl flex-col items-center justify-between gap-y-10 px-4 py-16 text-center md:flex-row md:text-left">
        <SectionTitle
          heading={HEADING.H2}
          title="Simplify how your team works today."
          accentBg
          hasButton
        />
        {/* <Button intent="secondary">Get started</Button> */}
      </div>
    </div>
  );
};

export default Contact;
