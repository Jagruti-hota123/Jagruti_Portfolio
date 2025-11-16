import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const About = ({ id }: { id: string }) => {
  return (
    <div id={id} className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Experience</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>

          {/* Add Hands-On Projects
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-200">
              Notable Projects
            </h3>
            <ul className="mt-4 text-gray-300">
              <li className="mb-2">
                1. <strong>Jiffy Eats:</strong> Developed a food delivery web
                app using React and tailwind CSS{" "}
              </li>
              <li className="mb-2">
                2. <strong>Student Tinder:</strong> Built a fully responsive
                website for a student tinder with MongoDB integration where
                users can connect with other students made with React and NodeJs
              </li>
            </ul>
          </div> */}
        </div>

        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto"
        >
          {/* Experience Stat */}
          <div className="flex flex-col items-center bg-[#111418] p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/experience.png"
              alt="Years of Experience"
              width={80}
              height={80}
              className="rounded-md"
            />
            <p className="mt-4 font-bold text-2xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="mt-2 text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>

          {/* Completed Projects Stat */}
          <div className="flex flex-col items-center bg-[#111418] p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/completed.png"
              alt="Completed Projects"
              width={80}
              height={80}
              className="rounded-md"
            />
            <p className="mt-4 font-bold text-2xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="mt-2 text-lg text-gray-400 text-center">
              Completed Projects
            </p>
          </div>

          {/* Technologies Section */}
          <div className="col-span-2 mt-8">
            <h3 className="text-xl font-semibold text-gray-200 mb-4 text-center sm:text-left">
              {` Technologies I've Worked With`}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300">
              {[
                "JavaScript",
                "ReactJS",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
                "Express.js",
                "Git",
                "HTML & CSS",
                "TypeScript",
                "RESTful APIs",
                "Fastify"
              ].map((tech, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base md:text-lg font-medium flex items-center justify-center sm:justify-start"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
