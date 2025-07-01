import SectionHeader from "../components/SectionHeader";
import loopSvg from "../assets/loop.svg";
import PictureProject from "../components/PictureProject";
import NoPicProject from "../components/NoPicProject";
export default function Projects() {
  return (
    <section className="test2 relative z-99">
      {/* <SectionHeader headerName="Projects" /> */}
      <p className="p-2.5 opacity-60">(ABOUT)</p>
      <br />
      <div className="h-[90vh] flex flex-col justify-between projectIntro">
        <div className="p-2.5 flex items-center justify-between">
          <p className="text-3xl w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum optio voluptatum architecto fuga adipisci fugiat impedit nisi aperiam veniam. Impedit beatae voluptatibus corrupti at eaque fuga saepe magni officia.</p>
          <img className=" w-1/5" src={loopSvg} alt="" />
        </div>
        <div className="flex justify-between p-2.5 text-5xl">
          <h1>Selected project</h1>
          <p>{`24-${String(new Date().getFullYear()).slice(-2)}`}</p>
        </div>
      </div>
      <PictureProject image="./image/travel.png" name="Travel recommendation" field="(Front-end)" />
      <br />
      <PictureProject image="./image/travel.png" name="Travel recommendation" field="(Front-end)" />
      <br />
      <PictureProject image="./image/travel.png" name="Travel recommendation" field="(Front-end)" />
      <br />
      <p className="text-6xl uppercase text-center font-bold">Discover more</p>
      <br />
      <NoPicProject name="4k youtube downloader" languageArray={["Javascript", "React", "Tailwind"]} />
      <NoPicProject name="ConnectedZ" languageArray={["Python"]} />

      {/* <NoPicProject name="Portfolio V1" />

      <NoPicProject name="4k youtube downloader" end={true} /> */}
    </section>
  );
}
