import { NavList } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const DesktopNav = () => {
  return (
    <header className="container mx-auto mt-6 items-center flex max-w-7xl justify-between px-4 py-6">
      <Link href="/">
        <Image
          src="/landing/logo.svg"
          alt="logo"
          width={146}
          height={24}
          className="max-w-[146px] object-cover"
        />
      </Link>

      <nav>
        <ul className="inline-flex items-center gap-10">
          {NavList.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button>Get started</Button>
    </header>
  );
};

export default DesktopNav;
