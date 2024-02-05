import React from "react";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Button from "../common/Button";

const Testimonials = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold">What they’ve said</h2>
      <TestimonialCarousel />
      <Button>Get started</Button>
    </section>
  );
};

export default Testimonials;
