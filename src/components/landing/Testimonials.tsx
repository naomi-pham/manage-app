import NavigateToPage from "../common/NavigateToPage";
import TestimonialCarousel from "./components/TestimonialCarousel";

const Testimonials = () => {
  return (
    <section className="mt-32 flex  flex-col items-center gap-6 overflow-hidden pb-10">
      <h2 className="text-center text-4xl font-bold">What they’ve said</h2>
      <TestimonialCarousel />
      <NavigateToPage url="/contact" title="Get started" />
    </section>
  );
};

export default Testimonials;
