import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { IconHamburger } from "../Icons";
import { NavList } from "@/constants/data";

const DesktopNav = () => {
  return (
    <header className="container mx-auto mt-2 flex max-w-7xl items-center justify-between px-4 py-6">
      <Link href="/">
        <Image
          src="/landing/logo.svg"
          alt="logo"
          width={146}
          height={24}
          className="max-w-[146px] object-cover"
        />
      </Link>

      <nav className="hidden lg:block">
        <ul className="inline-flex items-center gap-10">
          {NavList.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <Button>Get started</Button>
      </div>

      <i className="lg:hidden">
        <IconHamburger />
      </i>
    </header>
  );
};

export default DesktopNav;
