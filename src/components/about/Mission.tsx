import SectionTitle from "./component/SectionTitle";

const Mission = () => {
  return (
    <section className="bg-neutral-paleRed">
      <div className="container mx-auto mt-16 max-w-7xl px-6 py-16 md:mt-32">
        <div className="space-y-6">
          <SectionTitle title="Mission and vision" />
          <div className="md:columns-2 columns-1 gap-16 space-y-6 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              soluta. Tempora sed deserunt praesentium ut mollitia molestias
              quis magnam modi nostrum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              soluta. Tempora sed deserunt praesentium ut mollitia molestias
              quis magnam modi nostrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
