import externalLink from "../assets/external-link.svg";
import { useState } from "react";
import LanguageSlide from "./LanguageSlide";
export default function NoPicProject(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      on
      className={`h-24 hover:bg-white bg-center bg-cover flex items-center justify-between text-4xl border-[1px] border-x-0 border-opacity-20 border-b-0 p-2.5 ${props.end && "border-b-[1px]"}`}
    >
      {hover ? (
        <LanguageSlide languageArray={props.languageArray} />
      ) : (
        <div className="flex items-center justify-between w-full">
          <p className="min-w-1/10 text-6xl">01</p>
          <p className="text-6xl  text-[#ffffffe4] text-left grow">{props.name}</p>
          <img src={externalLink} alt="" className="w-20" />
        </div>
      )}
    </div>
  );
}
