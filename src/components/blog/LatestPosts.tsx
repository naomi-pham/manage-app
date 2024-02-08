import getCategoryBySlug from "@/lib/getCategoryBySlug";
import Link from "next/link";

const LatestPosts = async () => {
  const latestCategory = await getCategoryBySlug("latest");

  if (!latestCategory) return null;

  return (
    <div className="bg-neutral-darkBlue p-4 text-neutral-lightGray outline">
      <h3 className="text-4xl font-bold text-neutral-brightRed">New</h3>

      {latestCategory?.posts && latestCategory?.posts?.length > 0 ? (
        <ul className="mt-4">
          {latestCategory.posts.slice(1).map((post) => (
            <li
              key={post.id}
              className="group border-b border-zinc-400 py-6 last:border-none"
            >
              <Link href="/blog">
                <h4 className="text-2xl font-bold transition group-hover:text-red-400">
                  {post.title}
                </h4>
                <p className="mt-2 opacity-80">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default LatestPosts;
