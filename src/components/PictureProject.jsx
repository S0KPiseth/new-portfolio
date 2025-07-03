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
    containerRef.current.style.backgroundImage = `url(${props.image})`;
  }, []);

  return (
    <div>
      <div className="bg-size-[100%_auto] w-full aspect-[16/8] bg-center flex items-end mx-auto bg-no-repeat picProject" ref={containerRef} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}></div>
      <div>
        <p className="uppercase md:text-xl text-[2.5vw]">{props.name}</p>
        <p className="text-[1.5vw] md:text-sm opacity-50">{props.field}</p>
      </div>
    </div>
  );
}
