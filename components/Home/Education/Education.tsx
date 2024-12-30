import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";

const Education = ({ id }: { id: string }) => {
  return (
    <div id={id} className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Education</SectionHeading>
      <div className="mt-20 w-[90%] sm:w-[80%] mx-auto">
        {/* Slider */}
        <Slider />
      </div>
    </div>
  );
};

export default Education;
