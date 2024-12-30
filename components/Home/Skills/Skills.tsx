import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

const Skills = ({ id }: { id: string }) => {
  return (
    <div id={id} className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading> My Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {skillsData.map((skill, index) => {
          return (
            <div
              data-aos="flip-left"
              data-aos-delay={`${index * 150}`}
              data-aos-anchor-placement="top-center"
              key={skill.id}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
