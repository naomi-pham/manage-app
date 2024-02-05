import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto flex max-w-7xl items-center justify-between gap-10 px-4 mt-16">
      <div className="max-w-md space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Bring everyone together to build better products.
        </h1>
        <p className="text-neutral-darkBlue/40 max-w-sm">
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
