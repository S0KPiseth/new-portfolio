import PictureProject from "../components/PictureProject";
import NoPicProject from "../components/NoPicProject";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { projectWPic, projectNoPic } from "../lib/constants";
export default function Projects() {
  useGSAP(() => {
    const split = SplitText.create(".project", { type: "chars" });
    const projectIntroText = SplitText.create(".projectIntroText", { type: "words", mask: "lines", wordsClass: "ProjectWord++" });
    gsap.from(split.chars, { scrollTrigger: { trigger: ".project", toggleActions: "restart none none none" }, yPercent: -50, stagger: 0.05 });
    gsap.from(projectIntroText.words, { scrollTrigger: { trigger: ".projectIntroText", toggleActions: "restart none none none" }, yPercent: 50, stagger: 0.01, autoAlpha: 0 });
  }, []);
  return (
    <section className="test2 bg-[#101010] z-[999] relative text-white hidden">
      {/* <SectionHeader headerName="Projects" /> */}
      <div className="fixed w-full h-full top-1/2 lg:top-10/12 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" id="circle">
        &nbsp;
      </div>
      {/* <svg viewBox="0 0 100 100" className="fixed w-[450vw] h-[450vh] top-1/2 lg:top-10/12 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden svgContainer pointer-events-none" ref={svgRef}>
        <circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="3" id="circle" className="invisible" />
      </svg> */}
      <div className="w-full flex flex-col gap-20 lg:p-2.5 p-1">
        <div className="flex justify-between items-center">
          <p className=" lg:text-[9vw] font-bold uppercase project text-5xl">Project</p>
          <svg viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-1/12">
            <g clipPath="url(#clip0_1_708)">
              <mask
                id="mask0_1_708"
                style={{
                  maskType: "luminance",
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={201}
                height={200}
              >
                <path d="M200.5 0H0.5V200H200.5V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_708)">
                <path fillRule="evenodd" clipRule="evenodd" d="M50.5 0H200.5V50V150L150.5 200V50H0.5L50.5 0ZM0.5 165.067V100H65.567L0.5 165.067ZM100.5 200H36.2777L100.5 135.778V200Z" fill="currentColor" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_708">
                <rect width={200} height={200} fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="grow flex flex-col justify-between projectIntro">
          <div className=" flex items-center justify-between">
            <p className="md:text-3xl md:w-3/5 py-5 md:py-0 font-bold projectIntroText">
              To improve my skills, I work on open-source projects that are available on
              <a href="https://github.com/S0KPiseth" target="blank">
                {` GitHub`}
              </a>
              . Therefore, this section showcases the projects I’ve worked on in the past.
            </p>
          </div>
          <div className="flex justify-between text-[5vw] projectIntroText">
            <h1 className="font-bold">Selected project</h1>
            <p>{`(24-${String(new Date().getFullYear()).slice(-2)})`}</p>
          </div>
        </div>
      </div>
      <br />
      {
        <div className="flex flex-col gap-2.5 lg:p-2.5 p-1">
          {projectWPic
            .reduce((rows, project, index) => {
              // group every two items into a row
              if (index % 2 === 0) {
                rows.push([project]);
              } else {
                rows[rows.length - 1].push(project);
              }
              return rows;
            }, [])
            .map((pair, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "" : "flex-row-reverse"} lg:gap-2.5 gap-1`}>
                {pair.map((project, j) => (
                  <div key={j} className={j === 0 ? "w-3/5" : "grow"}>
                    <PictureProject project={project} />
                  </div>
                ))}
              </div>
            ))}
        </div>
      }

      <br />
      <p className="lg:text-[8vw] font-bold uppercase text-4xl text-center">Discover more</p>

      <div className="h-screen place-content-center ">
        {projectNoPic.map((project, index) => {
          return <NoPicProject project={project} index={index} end={index === projectNoPic.length - 1} />;
        })}
      </div>
    </section>
  );
}
