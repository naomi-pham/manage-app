import PageTitle from "@/components/common/typography/PageTitle";
import SolutionList from "@/components/solutions/SolutionList";
import React from "react";

const SolutionsPage = () => {
  return (
    <div className="container mx-auto mb-24 mt-10 px-6 md:mt-16">
      <PageTitle
        title="Manage solutions for all teams"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum
          eligendi voluptas eum voluptates facilis."
      />
      <SolutionList />
    </div>
  );
};

export default SolutionsPage;
