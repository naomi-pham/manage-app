import Button from "@/components/common/Button";
import getSolutionBySlug from "@/lib/getSolutionBySlug";
import React from "react";

const SolutionPage = async ({ params }: { params: { slug: string } }) => {
  const solution = await getSolutionBySlug(params.slug);

  if (!solution) return null;

  return (
    <div className="container mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center">
      <div className="max-w-3xl space-y-6 text-center">
        <h1 className="text-5xl font-bold capitalize">{solution.title}</h1>
        <p className="text-2xl text-zinc-600 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sequi
          vitae quaerat tempore laudantium reiciendis.
        </p>
      </div>

      <div className="mt-20 flex gap-10 items-center max-w-6xl">
        <div className="aspect-video h-52 rounded-lg bg-primary-brightRed/10" />

        <div className="space-y-6">
          <p className="text-2xl text-zinc-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, quo. Recusandae at commodi deleniti doloremque minus
            veritatis.
          </p>
          <Button>Contact sale</Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
