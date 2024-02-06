import React from "react";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Button from "../common/Button";

const Testimonials = () => {
  return (
    <section className="mt-32 pb-10  flex flex-col items-center gap-6 overflow-hidden">
      <h2 className="text-center text-4xl font-bold">What they’ve said</h2>
      <TestimonialCarousel />
      <Button>Get started</Button>
    </section>
  );
};

export default Testimonials;
