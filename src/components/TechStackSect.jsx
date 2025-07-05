import LanguageCategory from "./LanguageCategory";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Projects from "../pages/Projects";
import { stacks } from "../lib/constants";

export default function TechStackSect() {
  useGSAP(() => {
    const LanguageCategory = gsap.utils.toArray(".languageHeader");
    LanguageCategory.forEach((ele, index) => {
      gsap.set(ele, { scrollTrigger: { trigger: ele, start: "bottom bottom", pin: true, pinSpacing: false, endTrigger: ".test2", end: "top top", scrub: 1 }, marginTop: `${(index + 1) * 10}vh` });
    });
  }, []);
  return (
    <div className=" text-black tech bg-white h-fit relative">
      <div className="md:grid grid-cols-[repeat(2,auto)] grid-rows-1 gap-4.5 techDes p-2.5 relative">
        <h1 className="text-4xl md:text-[5vw] uppercase font-black row-end-1">Tech Stack</h1>
        <br className="md:hidden" />
        <div className=" row-end-2 col-start-2 techSectDescription">
          <p className="font-secondary md:text-3xl font-semibold text-sm">As I progress through my academic and professional journey, I recognize that technical and soft skills are crucial for my success in the field of software development. </p>
        </div>
      </div>
      {stacks.map((stack, index) => (
        <LanguageCategory last={index === stacks.length - 1 ? false : true} index={`0${index + 1}`} stack={stack} />
      ))}

      <Projects />
    </div>
  );
}
