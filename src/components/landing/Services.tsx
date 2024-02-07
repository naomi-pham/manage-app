import React from "react";
import ServiceList from "./components/ServiceList";

const Services = () => {
  return (
    <section className="container mx-auto mt-32 flex max-w-7xl flex-col justify-between gap-x-16 gap-y-10 px-4 md:flex-row">
      <div className="space-y-6 text-center md:max-w-md md:text-left">
        <h2 className="text-4xl font-bold">What’s different about Manage?</h2>
        <p className="text-neutral-darkBlue/60 md:max-w-[22rem]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <ServiceList />
    </section>
  );
};

export default Services;
