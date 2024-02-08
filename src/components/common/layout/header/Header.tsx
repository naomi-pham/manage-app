"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
import MobileMenuDrawer from "./MobileMenuDrawer";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
  const { width: windowWidth } = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

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
      <SecondaryNav />
      <PrimaryNav isOpen={isOpen} toggleMenu={toggleMenu} />

      {isOpen && <MobileMenuDrawer isOpen={isOpen} closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
