import { NavData } from "@/constants/data";
import { IPost, ISolution } from "@/constants/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconArrow } from "../../Icons";

const NavList = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="inline-flex items-center gap-5 lg:gap-10">
        {NavData.map((item) => (
          <li key={item.id} className="group">
            <Link
              href={item.slug}
              className={`flex items-center gap-1 font-medium group-hover:text-primary-brightRed ${pathname.includes(item.slug) ? "text-primary-brightRed" : ""}`}
            >
              {item.title}
              {item?.dropdown ? (
                <span className="rotate-90 transition duration-200 group-hover:-rotate-90">
                  <i>
                    <IconArrow />
                  </i>
                </span>
              ) : null}
            </Link>

            {item?.dropdown ? (
              <>
                <div className="absolute top-12 hidden h-fit w-[100px] bg-transparent p-10 group-hover:block"></div>
                <div className="absolute inset-0 top-[76px] mx-auto hidden h-fit bg-neutral-brightRed px-6 py-12 group-hover:block">
                  <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6">
                    {item.dropdown?.map((item) => (
                      <NavDropdownItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NavDropdownItem = ({ item }: { item: IPost | ISolution }) => {
  return (
    <Link
      href={item.slug}
      className="rounded-lg bg-white p-4 transition duration-200 hover:scale-[102%] hover:bg-neutral-grayishBlue"
    >
      <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
      <p className="line-clamp-2">{item.description}</p>
    </Link>
  );
};

export default NavList;
