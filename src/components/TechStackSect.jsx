import LanguageCategory from "./LanguageCategory";

export default function TechStackSect() {
  return (
    <div className=" text-black relative tech bg-white h-fit">
      <div className="grid grid-cols-[repeat(2,auto)] grid-rows-1 gap-4.5 techDes">
        <h1 className="text-9xl uppercase font-black row-end-1">Tech Stack</h1>
        <div className=" row-end-2 col-start-2 techSectDescription">
          <p className="font-secondary text-3xl font-medium ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptates dolorem, blanditiis illo! Suscipit necessitatibus sint iure minima numquam! </p>
          <br />
        </div>
      </div>
      <LanguageCategory index="01" name="UX/UI & Front end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />
      <br />
      <LanguageCategory index="02" name="Back end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />

      <br />
      <LanguageCategory index="02" name="Back end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />

      <br />
      <LanguageCategory index="02" name="Back end" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nisi pariatur veniam similique magni atque suscipit debitis ea unde nihil voluptate" language={[["Figma"], ["Reactjs", "Tailwind", "Css", "Gsap", "Boostrap"], ["HTML", "Javascript", "Css"]]} />
    </div>
  );
}
