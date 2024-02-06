import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto mt-16 flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-4 text-center md:text-left md:flex-row">
      <div className="md:max-w-md space-y-6">
        <h1 className="md:text-5xl text-4xl font-bold leading-tight">
          Bring everyone together to build better products.
        </h1>
        <p className="md:max-w-sm text-lg text-neutral-darkBlue/40">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button>Get started</Button>
      </div>
      <div>
        <Image
          src="/landing/illustration-intro.svg"
          alt="illustration-intro"
          width={580}
          height={525}
        />
      </div>
    </section>
  );
};

export default Banner;
