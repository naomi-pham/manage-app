import { IServiceCard } from "@/constants/interfaces";
import React from "react";

const ServiceCard = ({ item }: { item: IServiceCard }) => {
  return (
    <li className="flex items-start gap-4">
      <div className="flex min-w-[60px] items-center justify-center rounded-full bg-primary-brightRed/80 px-3 py-1.5 text-sm font-bold text-neutral-lightGray">
        0{item.id + 1}
      </div>
      <div className="mt-1 space-y-4">
        <h5 className="font-bold text-neutral-darkBlue/80 text-lg">{item.title}</h5>
        <p className="text-neutral-darkBlue/40">{item.desc}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
