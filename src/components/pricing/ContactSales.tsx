import React from "react";
import Button from "../common/Button";

const ContactSales = () => {
  return (
    <section className="container mx-auto my-40 max-w-7xl px-6">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 rounded-2xl bg-neutral-lightGray p-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Manage Enterprise</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, quo. Recusandae at commodi deleniti doloremque minus
            veritatis dicta nam temporibus illo rerum. Modi ullam ex iste eos
            aliquam nesciunt architecto.
          </p>
        </div>
        <div className="flex w-full min-w-fit justify-end">
          <Button shadow='none'>Contact sale</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSales;
