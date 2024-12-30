import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";

const Project = ({ id }: { id: string }) => {
  return (
    <div id={id} className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-anchor-placement="top-center"
              key={project.id}
              className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link
                href={project.url}
                target="_blank"
                className="cursor-pointer"
              />
              <Image
                src={project.image}
                alt="project"
                width={300}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
