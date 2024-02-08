"use client";

import { NavList } from "@/constants/data";
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
      staggerChildren: 0.1,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -100,
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
        <div className="fixed inset-0 top-14 z-20 bg-black/70 md:hidden" />
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
        className="font-secondary to-accent-400 fixed inset-0 top-14 z-20 flex flex-col overflow-hidden bg-gradient-to-br from-primary-brightRed md:hidden"
      >
        <motion.ul
          variants={container}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          className="mt-10 px-8"
        >
          {NavList.map((item) => (
            <motion.li variants={navItem} key={item.id} onClick={closeMenu} className="group">
              <Link href={item.url}>
                <div className="border-b border-zinc-100/50 py-10 text-3xl font-bold uppercase text-zinc-100 group-hover:text-zinc-300">
                  {item.label}
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
  );
};

export default MobileMenuDrawer;
