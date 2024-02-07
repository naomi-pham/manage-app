import { IServiceCard } from "@/constants/interfaces";
import React from "react";

const ServiceCard = ({ item }: { item: IServiceCard }) => {
  return (
    <>
      <div className="absolute right-0 flex w-[calc(100vw-16px)] items-center gap-4 rounded-l-lg bg-neutral-paleRed md:relative md:w-auto md:bg-transparent">
        <div className="flex min-w-[60px] items-center justify-center rounded-lg bg-primary-brightRed px-3 py-2 text-sm font-bold text-neutral-lightGray">
          0{item.id + 1}
        </div>
        <h5 className="line-clamp-1 py-1 font-bold text-neutral-darkBlue/80 md:text-lg">
          {item.title}
        </h5>
      </div>
      <div className="mt-14 md:mt-4">
        <p className="text-neutral-darkBlue/60">{item.desc}</p>
      </div>
    </>
  );
};

export default ServiceCard;
