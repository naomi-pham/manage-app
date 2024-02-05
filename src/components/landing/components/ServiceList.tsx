import { ServiceData } from "@/constants/data";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <ul className="flex max-w-2xl flex-col gap-10">
      {ServiceData.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ServiceList;
