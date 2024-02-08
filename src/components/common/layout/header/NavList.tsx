import { INavbar, IPost, ISolution } from "@/constants/interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconArrow } from "../../Icons";

const NavList = ({ navList }: { navList: INavbar[] }) => {
  const pathname = usePathname();

  if (!navList) return null;

  return (
    <nav className="hidden md:block">
      <ul className="inline-flex items-center gap-6 lg:gap-10">
        {navList.map((item) => (
          <li key={item.id} className="group">
            <Link
              href={item.slug}
              className={`font-medium flex gap-1 items-center group-hover:text-primary-brightRed ${pathname.includes(item.slug) ? "text-primary-brightRed" : ""}`}
            >
              {item.name}
              {item?.navDropdown ? (
                <span className="rotate-90 group-hover:-rotate-90 transition duration-200">
                  <i>
                    <IconArrow />
                  </i>
                </span>
              ) : null}
            </Link>

            <div className="absolute top-10 hidden h-fit w-fit bg-transparent p-10 group-hover:block"></div>

            {item?.navDropdown ? (
              <div className="absolute inset-0 top-[77px] mx-auto hidden h-fit bg-neutral-brightRed px-6 py-12 group-hover:block">
                <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6">
                  {item.navDropdown?.navDropdown?.map((item) => (
                    <NavDropdownItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NavItem = ({ item }: { item: INavbar }) => {
  return (
    <Link key={item.id} href={item.slug}>
      {item.name}
    </Link>
  );
};

export const NavDropdownItem = ({ item }: { item: IPost | ISolution }) => {
  return (
    <Link
      href={item.slug}
      className="rounded-lg bg-white p-4 transition duration-200 hover:scale-[102%] hover:bg-[#eaf0f6]"
    >
      <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
      <p className="line-clamp-2">{item.description}</p>
    </Link>
  );
};

export default NavList;
