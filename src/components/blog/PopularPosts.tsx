import { ICategory } from "@/constants/interfaces";
import Image from "next/image";
import Link from "next/link";

const PopularPosts = ({ category }: { category: ICategory }) => {
  return (
    <div>
      {category?.posts && category.posts.length > 0 ? (
        <ul className="my-32 grid grid-cols-1 gap-4 md:grid-cols-3">
          {category.posts.map((post, index) => (
            <li key={post.id} className="">
              <Link href="/blog">
                <div className="flex gap-4 group">
                  <Image
                    src={post.coverPhoto.url}
                    alt={post.title}
                    width={125}
                    height={95}
                    className="group-hover:scale-110 transition"
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-3xl font-bold opacity-20">0{index + 1}</p>
                    <h4 className="line-clamp-1 text-2xl font-bold opacity-80 group-hover:text-primary-brightRed transition">
                      {post.title}
                    </h4>
                    <p className="opacity-60">{post.description}</p>
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
