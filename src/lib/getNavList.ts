import { INavbar } from "@/constants/interfaces";
import { HYGRAPH_CLIENT } from "./hygraphClient";

const getNavList = async () => {
  const { navbars: navList } = await HYGRAPH_CLIENT.request<{
    navbars: INavbar[];
  }>(
    `query Navbar() { 
      navbars(orderBy: position_ASC) {
        id
        name
        slug
        position
        navDropdown {
          id
          navDropdown {
            ... on Solution {
              id
              title
              slug
              description
            }
          }
        }
      }
    }`,
  );

  return navList;
};

export default getNavList;
