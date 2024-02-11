import { ITeam } from "@/constants/interfaces";
import Image from "next/image";
import React from "react";

const TeamCard = ({ item }: { item: ITeam }) => {
  return (
    <li className="flex group flex-col items-center justify-center gap-6 text-center">
      <Image
        src={item.avatar}
        alt={item.name}
        width={300}
        height={300}
        className="object-fit aspect-square max-w-[110px] grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-200"
      />

      <div>
        <h5 className="text-lg font-bold">{item.name}</h5>
        <p className="capitalize text-neutral-darkBlue/60">{item.position}</p>
      </div>
    </li>
  );
};

export default TeamCard;
