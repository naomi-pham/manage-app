import { IServiceCard } from "@/constants/interfaces";
import React from "react";

const ServiceCard = ({ item }: { item: IServiceCard }) => {
  return (
    <li>
      <div className="absolute right-0 flex w-[calc(100vw-16px)] items-center gap-4 rounded-l-full bg-neutral-paleRed md:relative md:bg-transparent md:w-auto">
        <div className="flex min-w-[60px] items-center justify-center rounded-full bg-primary-brightRed/80 px-3 py-2 text-sm font-bold text-neutral-lightGray">
          0{item.id + 1}
        </div>
        <h5 className="py-1 font-bold text-neutral-darkBlue/80 md:text-lg line-clamp-1">
          {item.title}
        </h5>
      </div>
      <div className="mt-14 md:mt-4">
        <p className="text-neutral-darkBlue/40">{item.desc}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
