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
        trigger: ".contact",
        scrub: true,
        pin: ".test2",
        start: "top bottom",
        end: "bottom bottom",
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
      const contactText = SplitText.create(".contactText", { type: "words", mask: "lines" });
      const connectHeader = SplitText.create(".connectHeader", { type: "chars" });
      gsap.from(contactText.words, { scrollTrigger: { trigger: ".borderLines1", start: "top bottom", toggleActions: "restart none none none" }, yPercent: 50, stagger: 0.01, autoAlpha: 0 });
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
    <section className="h-screen w-screen contact text-black relative flex flex-col justify-evenly font-medium ">
      <div className="grow">
        <p className="md:text-8xl text-center font-bold connectHeader text-7xl">LET'S CONNECT</p>
      </div>
      <div className="flex md:p-2.5 p-1 border-t-1 border-black font-bold md:text-2xl text-[2vw] borderLines borderLines1 gap-x-1.5">
        <div className="w-1/3">
          <p className=" font-bold text-black/50 contactText">Email & Phone</p>
          <p className="contactText">piseth.sok.div@gmail.com</p>
          <p className="contactText">+855(0)967317303</p>
        </div>
        <div className="w-1/3">
          <p className=" font-bold text-black/50 contactText">Address</p>
          <p className="lg:w-1/2 contactText">Mlop Por Thmey Community Sangkat Kouk Roka Khan Prek Pnov Phnom Penh, 121104</p>
        </div>
        <div className="w-1/3">
          <p className=" font-bold text-black/50 contactText">Hire me</p>
          <p className="contactText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
