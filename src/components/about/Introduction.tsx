import { IconTeam } from "../common/Icons";
import SectionTitle from "./component/SectionTitle";

const Introduction = () => {
  return (
    <section className="container mx-auto mt-16 max-w-7xl px-6 py-10">
      <div className="flex flex-col items-center justify-center gap-x-20 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex aspect-video flex-1 items-center justify-center rounded-xl text-primary-brightRed">
          <IconTeam size={300} />
        </div>
        <div className="max-w-xl space-y-6">
          <SectionTitle
            subtitle="Who are we"
            title="A team of passion for technology"
          />
          <p className="text-xl font-bold">Our values and culture.</p>
          <p className="text-lg leading-relaxed text-neutral-darkBlue/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            soluta. Tempora sed deserunt praesentium ut mollitia molestias quis
            magnam modi nostrum. Adipisci sint aut, aliquam repudiandae
            consequuntur perferendis modi sed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
