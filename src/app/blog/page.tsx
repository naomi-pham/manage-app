import FeaturedPost from "@/components/blog/FeaturedPost";
import LatestPosts from "@/components/blog/LatestPosts";
import PopularPosts from "@/components/blog/PopularPosts";

const BlogPage = async () => {
  return (
    <div className="container mx-auto mt-10 md:mt-16 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-6 gap-y-16 lg:grid-cols-3">
        <FeaturedPost />
        <LatestPosts />
      </div>
      <PopularPosts />
    </div>
  );
};

export default BlogPage;
