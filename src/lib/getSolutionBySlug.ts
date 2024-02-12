import { ISolution } from "@/constants/interfaces";
import { HYGRAPH_CLIENT } from "./hygraphClient";

const getSolutionBySlug = async (slug: string) => {
  const { solution } = await HYGRAPH_CLIENT.request<{
    solution: ISolution;
  }>(
    `query Solution($slug:String) { 
      solution(where: {slug: $slug}) {
        id
        title
        slug
        description  
      }
    }`,
    { slug: slug },
  );


  return solution;
};

export default getSolutionBySlug;
