import FeaturedPost from "@/components/blog/FeaturedPost";
import LatestPosts from "@/components/blog/LatestPosts";
import PopularPosts from "@/components/blog/PopularPosts";
import getCategoryBySlug from "@/lib/getCategoryBySlug";

const BlogPage = async () => {
  const latestCategory = await getCategoryBySlug("latest");
  const popularCategory = await getCategoryBySlug("popular");

  return (
    <div className="container mx-auto mt-16 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-6 gap-y-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
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
