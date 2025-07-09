import { useState } from "react";
import LanguageSlide from "./LanguageSlide";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function NoPicProject(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => {
        if (!ScrollTrigger.isTouch) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        if (!ScrollTrigger.isTouch) {
          setHover(false);
        }
      }}
      onClick={() => window.open(props.project.link)}
      className={`h-20 md:h-24 hover:bg-white bg-center bg-cover flex items-center justify-between text-4xl border-[1px] border-x-0 border-opacity-20 border-b-0 md:p-2.5 ${props.end && "border-b-[1px]"} uppercase font-bold noPic`}
    >
      {hover ? (
        <LanguageSlide languageArray={props.project.language} />
      ) : (
        <div className="flex items-center justify-between w-full text-[5vw] lg:text-[4vw]">
          <p className="min-w-1/10 ">{`0${props.index + 1}`}</p>
          <p className="text-[#ffffffe4] text-center md:text-left grow text-nowrap overflow-ellipsis">{props.project.name}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-1/10 md:w-1/20">
            <g>
              <polygon fill="currentColor" points="85.982,32.037 85.982,14.051 85.982,14.047 67.993,14.047 67.993,14.047 26.013,14.047 26.013,32.037 50.971,32.037 14.018,68.99 30.98,85.953 67.993,48.942 67.993,74.017 85.982,74.017 85.982,32.037" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
