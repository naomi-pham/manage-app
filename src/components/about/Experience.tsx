import SectionTitle from "./component/SectionTitle";

const Experience = () => {
  return (
    <section className="container mx-auto mt-16 max-w-7xl px-6 py-10 md:mt-32">
      <div className="flex flex-col items-center justify-center gap-x-20 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-xl space-y-6">
          <SectionTitle
            subtitle="Our expertise"
            title="15 years of experience"
          />
          <p className="text-lg leading-relaxed text-neutral-darkBlue/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            soluta. Tempora sed deserunt praesentium ut mollitia molestias quis
            magnam modi nostrum.
          </p>
        </div>
        <div className="aspect-video flex-1 rounded-xl bg-zinc-100"></div>
      </div>
    </section>
  );
};

export default Experience;
