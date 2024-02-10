import { ISolution } from "@/constants/interfaces";
import { HYGRAPH_CLIENT } from "./hygraphClient";

const getSolutionBySlug = async (slug: string) => {
  console.log("🚀 ~ getSolutionBySlug ~ slug:", slug)
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

  console.log(123, solution);

  return solution;
};

export default getSolutionBySlug;
