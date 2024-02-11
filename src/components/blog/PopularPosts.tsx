import getCategoryBySlug from "@/lib/getCategoryBySlug";
import Image from "next/image";
import Link from "next/link";

const PopularPosts = async () => {
  const popularCategory = await getCategoryBySlug("popular");

  if (!popularCategory) return null;

  return (
    <div>
      {popularCategory?.posts && popularCategory?.posts?.length > 0 ? (
        <ul className="my-20 grid grid-cols-1 gap-6 md:my-32 md:grid-cols-3">
          {popularCategory.posts.map((post, index) => (
            <li key={post.id} className="">
              <Link href="/blog">
                <div className="group flex gap-4">
                  {post?.coverPhoto ? (
                    <Image
                      src={post.coverPhoto.url}
                      alt={post.title}
                      width={125}
                      height={95}
                      className="min-w-[125px] transition group-hover:scale-110"
                    />
                  ) : null}
                  <div className="flex flex-col gap-3">
                    <p className="text-3xl font-bold opacity-20">
                      0{index + 1}
                    </p>
                    <h4 className="line-clamp-1 text-2xl font-bold opacity-80 transition group-hover:text-primary-brightRed">
                      {post?.title}
                    </h4>
                    <p className="text-neutral-darkBlue/60">{post?.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default PopularPosts;
