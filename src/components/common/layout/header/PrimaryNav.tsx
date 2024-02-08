import { NavList } from "@/constants/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavigateToPage from "../../navigation/NavigateToPage";
import MobileMenuToggle from "./MobileMenuToggle";
import { usePathname, useRouter } from "next/navigation";

const PrimaryNav = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const { scrollYProgress } = useScroll();

  const pathname = usePathname();

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2],
    [
      "none",
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    ],
  );

  return (
    <motion.header
      style={{ boxShadow }}
      className="sticky top-0 z-30 bg-white/90 backdrop-blur-3xl"
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
        <nav className="hidden md:block">
          <ul className="inline-flex items-center gap-6 lg:gap-10">
            {NavList.map((item) => (
              <li
                key={item.id}
                className={`font-medium hover:text-primary-brightRed ${pathname.includes(item.url) ? "text-primary-brightRed" : ""}`}
              >
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <NavigateToPage url="/contact" title="Get started" />
        </div>

        <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </motion.header>
  );
};

export default PrimaryNav;
