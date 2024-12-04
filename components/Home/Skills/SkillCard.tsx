import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};
const SkillCard = ({ skill }: Props) => {
  const { id, title, image, percent } = skill;
  return (
    <div className="p-6 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-center bg-gray-900 rounded-lg ">
      <Image
        src={image}
        alt="img"
        width={80}
        height={80}
        className="mx-auto object-cover"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
