"use client";
import { Hero } from "./Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import ScrolltoTop from "../Helper/ScrolltoTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero id="hero" />
      <About id="about" />
      <Services id="services" />
      <Project id="projects" />
      <Skills id="skills" />
      <Education id="education" />
      {/* <Blog id="blog" /> */}
      <Contact id="contact" />
      <Footer />
      <ScrolltoTop />
    </div>
  );
};

export default Home;
