import React from "react";
import Button from "../common/Button";

const ContactSales = () => {
  return (
    <section className="container mx-auto my-32 max-w-7xl px-6">
      <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-6 rounded-2xl bg-neutral-lightGray p-10 sm:grid-cols-3">
        <div className="space-y-4 sm:col-span-2">
          <h3 className="text-2xl font-bold">Manage Enterprise</h3>
          <p className="text-neutral-darkBlue/80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, quo. Recusandae at commodi deleniti doloremque minus
            veritatis.
          </p>
        </div>
        <div className="sm:justify-self-end">
          <Button size="medium">Contact sale</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSales;
