import { NavList } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="/landing/logo.svg"
          alt="logo"
          width={146}
          height={24}
          className="max-w-[146px] object-cover"
        />
        <p>Manage</p>
      </Link>

      <nav>
        <ul>
          {NavList.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
