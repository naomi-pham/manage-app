import getSolutions from "@/lib/getSolutions";
import React from "react";
import SolutionCard from "./SolutionCard";

const SolutionList = async () => {
  const solutions = await getSolutions();

  if (!solutions) return null;

  return (
    <section className="mt-16 container mx-auto max-w-7xl px-6">
      {solutions?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item) => (
            <SolutionCard key={item.id} item={item} />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default SolutionList;
