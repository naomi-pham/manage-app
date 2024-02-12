import { TeamData } from "@/constants/data";
import SectionTitle from "./component/SectionTitle";
import TeamCard from "./component/TeamCard";

const Team = () => {
  return (
    <section className="container mx-auto mt-16 max-w-7xl px-6 py-10 md:mt-24">
      <div className="text-center">
        <SectionTitle subtitle="Our members" title="Meet the team" />
      </div>

      <ul className="flex flex-wrap gap-10 mt-16 items-center justify-center xl:justify-around">
        {TeamData.map((item) => (
          <TeamCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Team;
