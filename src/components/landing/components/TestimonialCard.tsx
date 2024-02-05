import { ITestimonialCard } from "@/constants/interfaces";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ item }: { item: ITestimonialCard }) => {
  return (
    <li className="relative min-w-[33%] mt-20 rounded-sm bg-neutral-lightGray p-6">
      <div className="absolute left-1/2 -top-10 -translate-x-1/2">
        <Image
          src={item.avatar}
          alt={item.author}
          width={144}
          height={144}
          className="max-w-20 object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4 mt-10 text-center">
        <h4 className="font-bold text-neutral-darkBlue/80">{item.author}</h4>
        <p className="text-primary-darkBlue/40">{item.content}</p>
      </div>
    </li>
  );
};

export default TestimonialCard;
