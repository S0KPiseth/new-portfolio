import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function LanguageSlide(props) {
  const containerRef = useRef();
  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }
      const child = containerRef.current.childNodes;
      for (let i = 0; i < 10; i++) {
        containerRef.current.appendChild(child[0].cloneNode(true));
      }

      const updateChildren = [...containerRef.current.children];
      updateChildren.map((child) => {
        gsap.to(child, {
          x: "-100%",
          repeat: -1,
          duration: (props.languageArray.length * 3.5) / 3,
          ease: "linear",
        });
      });
    },
    [containerRef.current],

    { scope: containerRef }
  );
  return (
    <div className="flex items-center gap-6 justify-right" ref={containerRef}>
      <div className="flex items-center gap-6 slider">
        {props.languageArray.map((language) => {
          return (
            <>
              <p className="bg-black p-1.5 rounded-full px-3.5 text-nowrap">{language}</p>
              <p className="text-black text-7xl">&middot;</p>
            </>
          );
        })}
      </div>
    </div>
  );
}
