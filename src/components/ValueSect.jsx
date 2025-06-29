import ValueCard from "../components/ValueCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
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
  }, []);
  return (
    <div className="flex flex-col gap-y-25">
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

      <div className="flex flex-col sm:flex-row">
        <ValueCard />
        <ValueCard isMiddle={true} />
        <ValueCard />
      </div>
    </div>
  );
}
