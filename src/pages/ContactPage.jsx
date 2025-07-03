import { useGSAP } from "@gsap/react";
import Lanyard from "../components/Lanyard";
import gsap from "gsap";
import { useState } from "react";
import HanumanSvg from "../components/HanumanSvg";

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
        markers: true,
        onEnter: () => {
          setScrolledContact(false);
        },
        onLeave: () => {
          setScrolledContact(true);
        },
      },
      strokeWidth: 100,
      visibility: "visible",
    });
  }, []);
  return (
    <section className="h-screen w-screen contact text-black relative">
      <div>
        <p className="text-5xl text-center">LET'S CONNECT</p>
      </div>
      <div className="flex">
        <div>
          <p>Email & Phone</p>
          <p>piseth.sok.div@gmail.com</p>
          <p>+855(0)967317303</p>
        </div>
        <div>
          <p>Address</p>
          <p>Mlop Por Thmey Community Sangkat Kouk Roka Khan Prek Pnov Phnom Penh, 121104</p>
        </div>
        <div>
          <p>Hire me</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>
      </div>
      <div className="flex">
        <p>All right reserve</p>
        <p>2025 Piseth Sok</p>
        <div>
          <a href="https://www.facebook.com/tea.tsushima/" target="blank">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/piseth-sok-21b65a289/" target="blank">
            Linkedin
          </a>
          <a href="https://github.com/S0KPiseth" target="blank">
            Github
          </a>
        </div>
      </div>
      <div className=" flex flex-row w-screen text-[20.5vw]/80 font-[Notable] name items-end">
        <span className="order-1 bg-green-500">P</span>
        <HanumanSvg />
        <span className="order-3">S</span>
        <span className="order-4">E</span>
        <span className="order-5">T</span>
        <span className="order-6">H</span>
      </div>
      <div className="absolute w-full h-full top-0">{scrolledContact && <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />}</div>
    </section>
  );
}
