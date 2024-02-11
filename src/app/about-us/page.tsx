import Experience from "@/components/about/Experience";
import Introduction from "@/components/about/Introduction";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import PageTitle from "@/components/common/typography/PageTitle";

const page = () => {
  return (
    <div>
      <PageTitle title="About us" />

      <Introduction />
      <Mission />
      <Experience />
      <Team />
      <Testimonials />
    </div>
  );
};

export default page;
