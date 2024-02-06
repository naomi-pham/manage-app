import { ServiceData } from "@/constants/data";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <ul className="flex flex-col gap-10 md:max-w-lg lg:max-w-2xl">
      {ServiceData.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ServiceList;
