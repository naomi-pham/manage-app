import React from "react";
import ServiceList from "./components/ServiceList";

const Services = () => {
  return (
    <section className="container flex-col md:flex-row mx-auto mt-32 flex max-w-7xl justify-between gap-y-10 gap-x-16 px-4">
      <div className="md:max-w-md text-center md:text-left space-y-6">
        <h2 className="text-4xl font-bold">What’s different about Manage?</h2>
        <p className="md:max-w-[22rem] text-neutral-darkBlue/40">
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
