import getCategoryBySlug from "@/lib/getCategoryBySlug";
import Image from "next/image";
import Button from "../common/Button";

const FeaturedPost = async () => {
  const latestCategory = await getCategoryBySlug("latest");
  const latestPost = latestCategory?.posts?.[0] ?? null;

  if (!latestPost) return null;

  return (
    <div className="lg:col-span-2">
      {latestPost?.coverPhoto ? (
        <Image
          src={latestPost.coverPhoto.url}
          alt={latestPost.title}
          width={667}
          height={274}
          className="min-w-full"
        />
      ) : null}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <h1 className="max-w-sm text-4xl font-bold md:text-5xl md:leading-tight">
          {latestPost?.title}
        </h1>
        <div className="flex flex-col items-start justify-between gap-y-4">
          <p className="text-lg text-neutral-darkBlue/60">{latestPost?.description}</p>
          <Button size="medium">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
