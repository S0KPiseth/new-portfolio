import { useGSAP } from "@gsap/react";
import Lanyard from "../components/Lanyard";
import gsap from "gsap";
import { useState } from "react";
import HanumanSvg from "../components/HanumanSvg";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ContactPage() {
  const [scrolledContact, setScrolledContact] = useState(false);

  useGSAP(() => {
    gsap.to("#circle", {
      scrollTrigger: {
        trigger: ".lastProjectSection",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
        pinSpacing: false,
      },
      backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 0%)",
    });

    gsap.to("#circle", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "+=50%",
        toggleActions: "restart none none none",
        onEnter: () => {
          setScrolledContact(false);
        },
        onEnterBack: () => {
          setScrolledContact(false);
        },
        onLeave: () => {
          setScrolledContact(true);
        },
      },
    });
    document.fonts.ready.then(() => {
      const contactText = SplitText.create(".contactText", { type: "chars", smartWrap: true });
      const connectHeader = SplitText.create(".connectHeader", { type: "chars" });
      gsap.from(contactText.chars, { scrollTrigger: { trigger: ".borderLines1", start: "top bottom", toggleActions: "restart none none none" }, yPercent: 50, stagger: 0.003, autoAlpha: 0 });
      gsap.from(connectHeader.chars, {
        yPercent: 50,
        autoAlpha: 0,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".contact",
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
      });
    });
    gsap.fromTo(
      ".connectHeader",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".contact",
          start: "top center",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.from(".borderLines", { scrollTrigger: { trigger: ".contactText", start: "top center", scrub: 1 }, autoAlpha: 0 });
    gsap.from(".contactLinks", { scrollTrigger: { trigger: ".contactLinks", start: "top bottom", end: "+=10%", scrub: 1 }, yPercent: 50, stagger: 0.01, autoAlpha: 0 });
    gsap.from(".footerName", {
      scrollTrigger: { trigger: ".footerDiv", toggleActions: "restart none none none" },
      yPercent: 50,
      scale: 0.7,
      ease: "expo.inOut",
      duration: 1,
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <section className="max-h-screen h-screen w-screen contact text-black relative flex flex-col justify-evenly font-medium ">
      <div className="grow">
        <p className="md:text-8xl text-center font-bold connectHeader text-7xl">LET'S&nbsp;CONNECT</p>
      </div>
      <div className="flex md:p-2.5 p-1 border-t-1 border-black font-bold md:text-2xl text-[2vw] borderLines borderLines1 gap-x-1.5">
        <div className="w-1/3">
          <p className=" font-bold text-black/50 contactText">Email & Phone</p>
          <p className="contactText">piseth.sok.div@gmail.com</p>
          <p className="contactText">+855(0)967317303</p>
        </div>
        <div className="w-1/3">
          <p className=" font-bold text-black/50 contactText">Based in</p>
          <p className="lg:w-1/2 contactText text-nowrap">Phnom Penh, Cambodia</p>
        </div>
        <div className="w-1/3">
          <p className=" font-bold text-black/50 contactText">Hire me</p>
          <p className="contactText">I’m a aspiring full-stack developer with hands-on experience building personal projects using React, Node.js, Express, MongoDB, and SQL. I focus on creating responsive interfaces and integrating RESTful APIs, and I’m excited to apply my skills and grow within a professional team.</p>
        </div>
      </div>
      <div className="flex md:p-2.5 p-1  font-bold border-t-1 border-black  md:text-2xl text-[2vw] borderLines">
        <p className="w-1/3 contactLinks">All right reserve</p>
        <p className="w-1/3 text-center contactLinks">&#169;2025 Piseth Sok</p>
        <div className="w-1/3 flex justify-evenly">
          <a href="https://www.facebook.com/tea.tsushima/" target="blank" className="contactLinks">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/piseth-sok-21b65a289/" target="blank" className="contactLinks">
            Linkedin
          </a>
          <a href="https://github.com/S0KPiseth" target="blank" className="contactLinks">
            Github
          </a>
        </div>
      </div>
      <div className=" flex flex-row w-screen text-[19.8vw] leading-[0.95] font-[Notable] footerDiv items-end">
        <span className="order-1  footerName">P</span>

        <div className="order-2 grow footerName">
          <HanumanSvg />
        </div>

        <span className="order-3 footerName">S</span>
        <span className="order-4 footerName">E</span>
        <span className="order-5 footerName">T</span>
        <span className="order-6 footerName">H</span>
      </div>
      <div className="absolute w-full h-full top-0">{scrolledContact && <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />}</div>
    </section>
  );
}
