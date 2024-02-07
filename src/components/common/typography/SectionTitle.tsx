"use client";

import React from "react";
import Button from "../Button";

const SectionTitle = ({
  heading,
  title,
  subtitle,
  hasButton,
}: {
  heading: string;
  title: string;
  subtitle?: string;
  hasButton?: boolean;
}) => {
  return (
    <div className="space-y-6 md:max-w-md">
      <h1 className="text-4xl font-bold leading-tight md:text-5xl">
        Bring everyone together to build better products.
      </h1>
      <p className="text-lg text-neutral-darkBlue/60 md:max-w-sm">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <Button>Get started</Button>
    </div>
  );
};

export default SectionTitle;
