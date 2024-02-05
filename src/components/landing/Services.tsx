import React from "react";
import ServiceList from "./components/ServiceList";

const Services = () => {
  return (
    <section className="container mx-auto mt-32 flex max-w-7xl justify-between gap-10 px-4">
      <div className="max-w-md space-y-6">
        <h2 className="text-3xl font-bold">What’s different about Manage?</h2>
        <p className="max-w-sm text-neutral-darkBlue/40">
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
