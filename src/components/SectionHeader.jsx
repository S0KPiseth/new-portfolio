import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function SectionHeader(props) {
  const containerRef = useRef();

  useGSAP(() => {
    if (containerRef.current) {
      const child = containerRef.current.childNodes;
      console.log(child);
      for (let i = 0; i < 10; i++) {
        containerRef.current.appendChild(child[0].cloneNode(true));
      }

      const updateChildren = [...containerRef.current.children];
      updateChildren.map((child) => {
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: child,
            start: "top top",
            endTrigger: ".test2",
            end: "top bottom",

            scrub: 1,
            pin: true,
          },
        });
        tl1.to(child, {
          x: "-50%",
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".tech",
            start: "top top",
            endTrigger: ".test2",
            end: "top bottom",
            scrub: true,
          },
        });
        tl2.to(child, {
          color: "black",
        });
        tl2.to(".nav", {
          zIndex: "99",
        });
      });
    }
  }, [containerRef.current]);

  return (
    <div className='flex font-["Lexend_Zetta"] text-5xl z-50 about' ref={containerRef}>
      <div className="flex">
        <p className="w-fit text-nowrap ">{props.headerName}</p>
        <p className='font-["Luxurious_Script"]'>me</p>
      </div>
    </div>
  );
}
