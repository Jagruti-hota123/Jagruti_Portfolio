import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const Hero = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-12">
          {/* Text Content */}
          <div>
            {/* sub Heading */}
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl  lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>
            {/* Heading */}
            <h1
              data-aos="fade-right"
              data-aos-delays="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[3rem]  xl:leading-[4rem] text-white "
            >
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-delays="100"
              className=" mt-6 text-xs md:text-sm text-white text-opacity-60 "
            >
              {BaseInfo.description}
            </p>
            {/* Button */}
            <Link target="_blank" href="Jagruti_updated_resume.pdf">
              <div
                data-aos="zoom-in"
                data-aos-delays="300"
                className="flex items-center gap-5 mt-5"
              >
                <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex ic space-x-2">
                  <span>Download CV</span>
                  <FaDownload />
                </button>
              </div>
            </Link>
          </div>
          {/* Image Content */}
          <div
            data-aos="zoom-in"
            data-aos-delays="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt="profile"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
