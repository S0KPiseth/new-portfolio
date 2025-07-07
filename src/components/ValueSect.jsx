import ValueCard from "../components/ValueCard";
import Svg1 from "../assets/svg1/Svg1";
import Svg2 from "../assets/svg2/Svg2";
import Svg3 from "../assets/svg3/Svg3";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { values } from "../lib/constants";

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
          toggleActions: "restart none none none",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
    document.fonts.ready.then(() => {
      const split = SplitText.create(".valueParagraph", { type: "words" });

      gsap.from(split.words, {
        scrollTrigger: {
          trigger: ".valueParagraph",
          start: "top+=10% bottom",
          end: "top 20%",
          toggleActions: "restart none none none",
        },

        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });

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
    <div className="flex flex-col gap-y-25 valueDiv !duration-0">
      <div className="value">
        <p className="text-xl p-2.5 pb-0 valueText">Value</p>
        <span className="uppercase flex font-secondary justify-evenly text-3xl lg:text-[3vw] font-semibold p-2.5">
          <p className="grow valueText">Cover</p>
          <p className="grow text-center valueText">me</p>
          <p className="grow text-center valueText">in</p>
          <p className="grow text-right valueText">debris</p>
        </span>
      </div>

      <p className="lg:text-3xl text-2xl text-right p-2.5 valueParagraph">Value is what surrounds me and keeps me safe. It’s what makes me who I am and helps me face whatever comes my way. Without it, I would not be me.</p>

      <div className="flex flex-col sm:flex-row text-white/85">
        {values.map((value, index) => (
          <ValueCard key={value.name} value={value} svg={index === 0 ? <Svg1 /> : index === 1 ? <Svg2 /> : <Svg3 />} isMiddle={index === 1 && true} />
        ))}
      </div>
    </div>
  );
}
