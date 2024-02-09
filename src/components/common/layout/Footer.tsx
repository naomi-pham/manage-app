import IconList from "@/components/landing/components/IconList";
import SignUpForm from "@/components/landing/components/SignUpForm";
import { FooterLinks } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto bg-neutral-darkBlue text-neutral-lightGray/90">
      <div className="container mx-auto flex max-w-7xl flex-col flex-wrap justify-between gap-16 px-6 py-16 md:flex-row">
        <div className="order-3 flex flex-col-reverse items-center gap-16 md:order-1 md:flex-col md:items-start md:gap-10 lg:justify-between">
          <Link href="/" className="">
            <Image
              src="/landing/logo-footer.svg"
              alt="logo"
              width={146}
              height={24}
              className="min-w-[200px] max-w-[200px] lg:min-w-[146px] lg:max-w-[146px]"
            />
          </Link>
          <IconList />
        </div>
        <div className="order-2 mx-auto inline-flex gap-6 w-10/12 lg:w-4/12 lg:text-base justify-between text-lg md:w-5/12">
          <ul className="space-y-4">
            {FooterLinks.left.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="hover:text-neutral-brightRed"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {FooterLinks.right.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="hover:text-neutral-brightRed"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 flex flex-col items-end justify-between md:order-3">
          <SignUpForm />
          {/* <p className="text-sm text-neutral-lightGray/40">
            Copyright 2020. All Rights Reserved
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
