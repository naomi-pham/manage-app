import { IconData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconList = () => {
  return (
    <ul className="inline-flex w-full items-center gap-4">
      {IconData.map((item) => (
        <li key={item.id} className="flex-1 flex justify-center">
          <Link href={item.url}>
            <Image
              src={item.icon}
              alt={item.label}
              width={20}
              height={20}
              className="min-w-[32px] sm:min-w-[40px] md:min-w-[20px]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
