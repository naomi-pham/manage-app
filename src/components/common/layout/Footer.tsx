import IconList from "@/components/landing/components/IconList";
import SignUpForm from "@/components/landing/components/SignUpForm";
import { FooterLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-darkBlue text-neutral-lightGray/70">
      <div className="container mx-auto flex max-w-7xl justify-between gap-20 px-4 py-16">
        <div className="flex flex-col justify-between">
          <Link href="/">
            <Image
              src="/landing/logo-footer.svg"
              alt="logo"
              width={146}
              height={24}
              className="max-w-[146px]"
            />
          </Link>
          <IconList />
        </div>
        <ul className="space-y-3">
          {FooterLinks.left.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className="hover:text-primary-brightRed/60">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-3">
          {FooterLinks.right.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className="hover:text-primary-brightRed/60">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-end justify-between">
          <SignUpForm />
          <p className="text-sm text-neutral-lightGray/40">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
