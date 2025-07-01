import LanguageCategory from "./LanguageCategory";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Projects from "../pages/Projects";
import SplitText from "gsap/SplitText";

export default function TechStackSect() {
  useGSAP(() => {
    const LanguageCategory = gsap.utils.toArray(".languageHeader");
    LanguageCategory.forEach((ele, index) => {
      gsap.set(ele, { scrollTrigger: { trigger: ele, pin: true, pinSpacing: false, endTrigger: ".test2", end: "top top", scrub: 1, pinType: "transform", pinReparent: true }, marginTop: `${(index + 1) * 10}vh` });
    });
    ScrollTrigger.create({
      trigger: ".test2",
      end: "top top",
      scrub: true,
      pin: true,
      pinSpacing: false,
      pinReparent: true,
    });
    const split = SplitText.create(".project", { type: "chars" });
    gsap.from(split.chars, { scrollTrigger: { trigger: ".project", toggleActions: "restart none none none" }, yPercent: -50, stagger: 0.05 });
  }, []);
  return (
    <div className=" text-black tech bg-white h-fit relative">
      <div className="md:grid grid-cols-[repeat(2,auto)] grid-rows-1 gap-4.5 techDes p-2.5 relative">
        <h1 className="text-4xl md:text-[5vw] uppercase font-extrabold row-end-1 font-[Geist] ">Tech Stack</h1>
        <br className="md:hidden" />
        <div className=" row-end-2 col-start-2 techSectDescription">
          <p className="font-secondary md:text-3xl font-medium text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptates dolorem, blanditiis illo! Suscipit necessitatibus sint iure minima numquam! </p>
        </div>
      </div>
      <LanguageCategory last={false} index="01" name="UX/UI & Front end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />
      <br />
      <LanguageCategory last={false} index="02" name="Back end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />

      <br />
      <LanguageCategory last={false} index="02" name="Back end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />

      <br />
      <LanguageCategory last={true} index="02" name="Back end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />
      <Projects />
    </div>
  );
}
