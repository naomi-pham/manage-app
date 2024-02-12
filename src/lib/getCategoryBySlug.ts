import { ICategory } from "@/constants/interfaces";
import { HYGRAPH_CLIENT } from "./hygraphClient";

const getCategoryBySlug = async (slug: string) => {
  const { category } = await HYGRAPH_CLIENT.request<{
    category: ICategory;
  }>(
    `query Category($slug:String) { 
      category(where: {slug: $slug}) {
        id
        title
        slug
        posts(orderBy: publishedAt_DESC) {
          id
          title
          slug
          description
          content {
            html
          }
          coverPhoto {
            url
          }
        }    
      }
    }`,
    { slug: slug },
  );

  // console.log(category);

  return category;
};

export default getCategoryBySlug;
