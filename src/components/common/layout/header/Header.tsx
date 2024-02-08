"use client";

import { NavList } from "@/constants/data";
import useWindowSize from "@/hooks/useWindowSize";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavigateToPage from "../../navigation/NavigateToPage";
import MobileMenuDrawer from "./MobileMenuDrawer";
import MobileMenuToggle from "./MobileMenuToggle";

const Header = () => {
  const { width: windowWidth } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2],
    [
      "none",
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    ],
  );

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  useEffect(() => {
    if (windowWidth >= 768) {
      closeMenu();
    }
  }, [windowWidth]);

  return (
    <>
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
                  className="font-medium hover:text-primary-brightRed"
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
      {isOpen && <MobileMenuDrawer isOpen={isOpen} closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
