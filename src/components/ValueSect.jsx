import ValueCard from "../components/ValueCard";
import Svg1 from "../assets/svg1/Svg1";
import Svg2 from "../assets/svg2/Svg2";
import Svg3 from "../assets/svg3/Svg3";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ValueSect() {
  useGSAP(() => {
    gsap.fromTo(
      ".valueText",

      {
        y: 100,
        autoAlpha: 0,
        opacity: 0.7,
      },
      {
        scrollTrigger: {
          trigger: ".value",
          start: "top bottom",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
    const split = SplitText.create(".valueParagraph", { type: "words" });

    gsap.from(split.words, {
      scrollTrigger: {
        trigger: ".valueParagraph",
        start: "top+=10% bottom",
        end: "top 20%",
      },

      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
    });
    const svg2Children = gsap.utils.toArray("#svg2 > *");
    const svgTimeLine = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".valueCardContainer",
          start: "top+=10% bottom",
          end: "bottom bottom",
        },
      })
      .fromTo(
        svg2Children,
        {
          scale: 1.2,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    const svg1Children = gsap.utils.toArray("#svg1 > *");

    const svg1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".valueCardContainer",
        start: "top+=10% bottom",
        end: "bottom bottom",
      },
    });

    svg1Timeline.set(svg1Children, { opacity: 0 });

    svg1Children.forEach((el, i) => {
      svg1Timeline.to(
        el,
        {
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        },
        `+=0.1`
      );
    });
  }, []);
  return (
    <div className="flex flex-col gap-y-25 valueDiv">
      <div className="value">
        <p className="text-xl p-2.5 pb-0 valueText">Value</p>
        <span className="uppercase flex font-secondary justify-evenly text-3xl lg:text-[3vw] font-semibold p-2.5">
          <p className="grow valueText">Cover</p>
          <p className="grow text-center valueText">me</p>
          <p className="grow text-center valueText">in</p>
          <p className="grow text-right valueText">debris</p>
        </span>
      </div>

      <p className="lg:text-3xl text-2xl text-right p-2.5 valueParagraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nihil cupiditate officiis aperiam natus possimus, delectus maiores voluptas iure quas harum vel consequuntur laudantium ab quasi quaerat ratione distinctio velit.</p>

      <div className="flex flex-col sm:flex-row text-white/85">
        <ValueCard svg={<Svg1 />} />
        <ValueCard isMiddle={true} svg={<Svg2 />} />
        <ValueCard svg={<Svg3 />} />
      </div>
    </div>
  );
}
