import SectionTitle from "./component/SectionTitle";
import TeamReviewCarousel from "./component/TeamReviewCarousel";

const Testimonials = () => {
  return (
    <section className="container mx-auto mt-16 max-w-7xl px-6 py-10 md:my-24">
      <div className="text-center">
        <SectionTitle title="What people say about Manage" />
      </div>

      <div className="mt-16">
        <TeamReviewCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
