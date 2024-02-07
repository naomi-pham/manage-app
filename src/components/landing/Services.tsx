import { HEADING } from "@/constants/interfaces";
import SectionTitle from "../common/animation/SectionTitle";
import ServiceList from "./components/ServiceList";

const Services = () => {
  return (
    <section className="container mx-auto mt-32 flex max-w-7xl flex-col justify-between gap-x-16 gap-y-10 px-4 md:flex-row">
      <SectionTitle
        heading={HEADING.H2}
        title="What’s different about Manage?"
        subtitle="Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams."
      />
      <ServiceList />
    </section>
  );
};

export default Services;
