import ValueSect from "../components/ValueSect";
import TechStackSect from "../components/TechStackSect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import TiltedCard from "../components/TiltedCard";
export default function AboutPage() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const split = SplitText.create(".aboutParagraph", {
        type: "chars, words",
        smartWrap: true,
        wordsClass: "word++",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: ".aboutParagraph",
          start: `top 80%`,
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.3,
        stagger: 0.1,
      });
      gsap.fromTo(
        ".profileCard",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".aboutParagraph",
            start: "top top",
            end: "bottom top",
          },
        }
      );

      gsap.fromTo(
        ".valueCardHeader",
        { opacity: 0 },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: ".valueCardHeader",
            start: "top 80%",
            end: "bottom center",
          },
        }
      );
      let paraSplit;
      SplitText.create(".valueParaGraph", {
        type: "lines",
        mask: "lines",

        onSplit: (self) => {
          paraSplit = gsap.from(self.lines, {
            scrollTrigger: {
              trigger: ".valueParaGraph",
              start: "top 80%",
              endTrigger: ".valueParaGraph",
              end: "bottom center",
            },
            duration: 0.6,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "expo.out",
          });
          return paraSplit;
        },
      });
    });
    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".valueDiv",
        start: "bottom bottom",
        pin: true,
        end: `+=${window.innerHeight * 1.3}`,
        scrub: true,
        pinSpacing: true,
      },
    });

    zoomTl.set("#svg2", { color: "white" });
    zoomTl.to("#svg2", {
      scale: 150,
      transformOrigin: "center",
      x: -100,
      ease: "none",
    });
  }, []);

  return (
    <section className="min-h-screen test relative z-0">
      <div className="flex flex-col justify-start md:justify-center items-center gap-2.5 h-fit md:h-screen ">
        <p className="lg:text-[2.5vw] text-xl md:text-4xl leading-[1.1] aboutParagraph font-semibold w-full lg:w-11/12 text-center p-1.5 lg:p-0">Hi, I’m Seth. I’m a full stack developer who enjoys creating clean, functional, and user-friendly web apps. I like working across the stack — from crafting UI to setting up servers — and I’m always looking for new things to build and learn along the way.</p>
        <br />
        <div className="profileCard opacity-100">
          <TiltedCard imageSrc="./image/pexels-photo-29494962.webp" altText="Piseth Sok - Ace" captionText="Piseth Sok - Ace" containerHeight="350px" containerWidth="350px" imageHeight="350px" imageWidth="350px" rotateAmplitude={12} scaleOnHover={1.1} showMobileWarning={false} showTooltip={true} displayOverlayContent={true} overlayContent={<p className="capitalize text-white tracking-[-0.5px] bg-[#0006] rounded-[15px] m-8 px-4 py-2 font-figtree font-black shadow-[0_5px_30px_#06001059]">Piseth Sok - Ace</p>} />
        </div>
      </div>
      <br />
      <ValueSect />
      <TechStackSect />
    </section>
  );
}
