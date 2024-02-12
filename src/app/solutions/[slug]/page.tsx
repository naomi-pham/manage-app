import Button from "@/components/common/Button";
import PageTitle from "@/components/common/typography/PageTitle";
import getSolutionBySlug from "@/lib/getSolutionBySlug";

const SolutionPage = async ({ params }: { params: { slug: string } }) => {
  const solution = await getSolutionBySlug(params.slug);

  if (!solution) return null;

  return (
    <div className="container mx-auto px-6 flex max-w-7xl flex-col items-center justify-center">
      <PageTitle
        title={solution.title}
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sequi
      vitae quaerat tempore laudantium reiciendis."
      />

      <div className="my-20 flex flex-col md:flex-row max-w-6xl items-center gap-10">
        <div className="aspect-video w-full rounded-lg bg-primary-brightRed/10" />

        <div className="space-y-6">
          <p className="text-xl leading-relaxed text-zinc-600">
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
