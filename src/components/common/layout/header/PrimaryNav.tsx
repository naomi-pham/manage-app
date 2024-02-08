import useScrollPosition from "@/hooks/useScrollPosition";
import Image from "next/image";
import Link from "next/link";
import { IconClose, IconHamburger } from "../../Icons";
import NavigateToPage from "../../navigation/NavigateToPage";
import NavList from "./NavList";
import { INavbar } from "@/constants/interfaces";

const PrimaryNav = ({
  isOpen,
  toggleMenu,
  navList,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  navList: INavbar[];
}) => {
  const { y: scrollYPosition } = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-30 bg-white/90 backdrop-blur-3xl ${scrollYPosition > 60 ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/landing/logo.svg"
            alt="logo"
            width={146}
            height={24}
            className="max-w-[146px] object-cover"
          />
        </Link>

        <NavList navList={navList} />

        <div className="hidden md:block">
          <NavigateToPage url="/contact" title="Get started" />
        </div>

        <button
          onClick={toggleMenu}
          className={`z-40 flex items-center gap-2 py-1 md:hidden ${
            isOpen ? "text-zinc-700" : "text-primary-brightRed"
          }`}
        >
          <i>{isOpen ? <IconClose /> : <IconHamburger />}</i>
        </button>
      </div>
    </header>
  );
};

export default PrimaryNav;
