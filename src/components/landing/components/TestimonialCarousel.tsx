import { TestimonialData } from "@/constants/data";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  return (
    <ul className="flex items-center gap-6 mb-12 mt-6 overflow-x-hidden">
      {TestimonialData.map((item) => (
        <TestimonialCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TestimonialCarousel;
