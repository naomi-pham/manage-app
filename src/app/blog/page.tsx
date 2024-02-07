import FeaturedPost from "@/components/blog/FeaturedPost";
import LatestPosts from "@/components/blog/LatestPosts";
import PopularPosts from "@/components/blog/PopularPosts";
import getCategoryBySlug from "@/lib/getCategoryBySlug";

const BlogPage = async () => {
  const latestCategory = await getCategoryBySlug("latest");
  const popularCategory = await getCategoryBySlug("popular");

  return (
    <div className="container mx-auto max-w-7xl px-6 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          {latestCategory?.posts?.[0] ? (
            <FeaturedPost post={latestCategory.posts[0]} />
          ) : null}
        </div>
        <LatestPosts category={latestCategory} />
      </div>
      <PopularPosts category={popularCategory} />
    </div>
  );
};

export default BlogPage;
