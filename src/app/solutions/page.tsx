import SolutionList from "@/components/solutions/SolutionList";
import React from "react";

const SolutionsPage = () => {
  return (
    <div className="container mx-auto mb-24 mt-10 px-6 md:mt-16">
      <div className="mt-10 space-y-6 max-w-3xl mx-auto text-center md:mt-16">
        <h1 className="text-5xl font-bold">Manage solutions for all teams</h1>
        <p className="text-2xl text-zinc-600 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum
          eligendi voluptas eum voluptates facilis.
        </p>
      </div>

      <SolutionList />
    </div>
  );
};

export default SolutionsPage;
