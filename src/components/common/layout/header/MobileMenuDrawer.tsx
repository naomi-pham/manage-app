"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const drawer = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: "-50%",
  },
};

const container = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  show: {
    width: "100%",
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
      damping: 0,
    },
  },
};

const MobileMenuDrawer = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 top-14 z-20 bg-black/60 md:hidden" />
      )}
      <motion.div
        variants={drawer}
        initial="close"
        animate={isOpen ? "open" : "close"}
        transition={{
          damping: 0,
          bounce: 0,
          duration: 0.4,
        }}
        className="font-secondary to-accent-400 fixed inset-0 top-14 z-20 flex flex-col overflow-hidden bg-gradient-to-br from-primary-brightRed text-zinc-200 md:hidden"
      >
        <div className="container mx-auto my-10 mt-48 flex max-w-7xl flex-1 flex-col justify-between px-4">
          <motion.ul
            variants={container}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            className="space-y-16"
          >
            {MenuList.map((item) => (
              <motion.li
                variants={navItem}
                key={item.id}
                onClick={closeMenu}
                className="border-b border-zinc-100/50 pb-16"
              >
                <Link
                  href={item.url}
                  className="text-4xl font-black uppercase sm:text-6xl"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
};

const MenuList = [
  { id: 0, label: "Blog", url: "/" },
  { id: 1, label: "All posts", url: "/" },
  { id: 2, label: "Links", url: "/" },
];

export default MobileMenuDrawer;
