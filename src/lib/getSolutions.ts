import { ISolution } from "@/constants/interfaces";
import { HYGRAPH_CLIENT } from "./hygraphClient";

const getSolutions = async () => {
  const { solutions } = await HYGRAPH_CLIENT.request<{
    solutions: ISolution[];
  }>(
    `query Solutions { 
      solutions {
        id
        title
        slug
        description 
      }
    }`,
  );

  console.log(solutions);

  return solutions;
};

export default getSolutions;
