import { IPost } from "@/constants/interfaces";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";

const FeaturedPost = ({ post }: { post: IPost }) => {
  return (
    <div className="">
      <Image
        src={post.coverPhoto.url}
        alt={post.title}
        width={667}
        height={274}
        className="min-w-full"
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <h1 className="max-w-sm text-4xl font-bold md:text-5xl md:leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between gap-y-4">
          <p className="text-lg opacity-60">{post.description}</p>
          <Button shadow="none">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
