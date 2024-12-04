"use client";
import { educationData } from "@/Data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EduCard from "./EduCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidestoSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidestoSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidestoSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      responsive={responsive}
      infinite
      autoPlaySpeed={5000}
    >
      {educationData.map((edu) => {
            return <div key={edu.image}>
            <EduCard edu={edu} />
            </div>
      
     })}
    </Carousel>
  );
};

export default Slider;
