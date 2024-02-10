import { ISolution } from "@/constants/interfaces";
import Link from "next/link";
import React from "react";

const SolutionCard = ({ item }: { item: ISolution }) => {
  return (
    <Link href={`/solutions/${item.slug}`}>
      <div className="hover:scale-105 hover:bg-neutral-brightRed transition cursor-pointer bg-white p-6 shadow-md">
        <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
        <p className="line-clamp-2">{item.description}</p>
      </div>
    </Link>
  );
};

export default SolutionCard;
