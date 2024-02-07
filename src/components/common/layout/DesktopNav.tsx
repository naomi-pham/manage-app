import { NavList } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { IconHamburger } from "../Icons";
import NavigateToPage from "../NavigateToPage";

const DesktopNav = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-3xl">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
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
              <li
                key={item.id}
                className="font-medium hover:text-primary-brightRed"
              >
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <NavigateToPage url="/contact" title="Get started" />
        </div>
        <i className="lg:hidden">
          <IconHamburger />
        </i>
      </div>
    </header>
  );
};

export default DesktopNav;
