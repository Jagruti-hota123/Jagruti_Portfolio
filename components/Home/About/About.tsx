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

          {/* Additional Section for Technologies/Skills */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-200">
              {`Technologies I've Worked With`}
            </h3>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <li className="text-gray-300">JavaScript</li>
              <li className="text-gray-300">ReactJS</li>
              <li className="text-gray-300">Node.js</li>
              <li className="text-gray-300">MongoDB</li>
              <li className="text-gray-300">Tailwind CSS</li>
              <li className="text-gray-300">Express.js</li>
              <li className="text-gray-300">Git</li>
            </ul>
          </div>

          {/* Add Hands-On Projects */}
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
          </div>
        </div>

        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          <div>
            <Image
              src="/images/experience.png"
              alt="about"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>
          <div>
            <Image
              src="/images/completed.png"
              alt="about"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Completed Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
