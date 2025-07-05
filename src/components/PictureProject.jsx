import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function PictureProject(props) {
  const containerRef = useRef();
  const { contextSafe } = useGSAP();

  const handleHover = contextSafe(() => {
    gsap.fromTo(containerRef.current, { backgroundSize: "100% auto" }, { backgroundSize: "120% auto" });
  });
  const handleMouseOut = contextSafe(() => {
    gsap.fromTo(containerRef.current, { backgroundSize: "120% auto" }, { backgroundSize: "100% auto" });
  });

  useEffect(() => {
    if (!containerRef) return;
    containerRef.current.style.backgroundImage = `url(${props.project.image})`;
  }, []);

  return (
    <div>
      <div className="bg-size-[100%_auto] w-full aspect-[16/8] bg-center flex items-end mx-auto bg-no-repeat picProject" ref={containerRef} onMouseEnter={handleHover} onMouseLeave={handleMouseOut} onClick={() => window.open(props.project.link)} />
      <div>
        <div className="flex justify-between items-center">
          <p className="uppercase md:text-xl text-[2.5vw]">{props.project.name}</p>
          <p>{props.project.year}</p>
        </div>
        <p className="text-[1.5vw] md:text-sm opacity-50">{props.project.field.join(", ")}</p>
      </div>
    </div>
  );
}
