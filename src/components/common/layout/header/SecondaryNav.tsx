import { IconData } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const SecondaryNav = () => {
  return (
    <div className="bg-neutral-darkBlue text-zinc-100 hidden md:block">
      <div className="container mx-auto flex w-full max-w-7xl justify-end px-6 py-2 gap-4 divide-x">
        <p className="text-sm">Mail us: hello@manage.com</p>
        <ul className="flex items-center gap-4 pl-4">
          {IconData.map((item) => (
            <li key={item.id} className="flex justify-center">
              <Link href={item.url}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="aspect-square w-4"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondaryNav;
