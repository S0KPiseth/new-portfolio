import { useGSAP } from "@gsap/react";
import { Link } from "react-router";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { createElement, useRef } from "react";

export default function NavBar() {
  const container = useRef();
  useGSAP(() => {
    if (!container.current) return;
    let isHidden = false;

    const navLinks = container.current.querySelectorAll(".NavLinks");
    // const menuBtn = document.querySelector(".menuBtn");

    const handleScroll = () => {
      if (window.scrollY > 20 && !isHidden) {
        isHidden = true;
        const state = Flip.getState(container.current);

        navLinks.forEach((link) => container.current.removeChild(link));

        const menuBtn = document.createElement("button");
        menuBtn.className = "bg-white text-black p-1.5 px-4 rounded-full menuBtn";
        menuBtn.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 0.637 0.637" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M0.6 0.112v0.075H0.037V0.112zM0.037 0.375h0.563V0.3H0.037zm0 0.188h0.563v-0.075H0.037z" fill="#000000"/>
          </svg>`;
        gsap.to(".willHidden", {
          y: "-100px",
          duration: 0.5,
          ease: "power1.out",
        });
        container.current.appendChild(menuBtn);
        container.current.classList.add("rounded-full");
        container.current.classList.add("top-2.5");
        container.current.classList.add("pl-3");
        container.current.classList.add("right-[-50px]");
        container.current.classList.remove("rounded-md");
        container.current.classList.remove("translate-x-[-50%]");
        container.current.classList.remove("left-[50%]");

        Flip.from(state, { duration: 1, ease: "power1.inOut", scale: true });
      } else if (window.scrollY === 0 && isHidden) {
        isHidden = false;
        const state = Flip.getState(container.current);

        navLinks.forEach((link) => container.current.appendChild(link));
        container.current.removeChild(document.querySelector(".menuBtn"));
        container.current.classList.add("rounded-md");
        container.current.classList.add("left-[50%]");
        container.current.classList.add("translate-x-[-50%]");
        container.current.classList.remove("pl-3");
        container.current.classList.remove("rounded-full");
        container.current.classList.remove("right-[-50px]");

        Flip.from(state, {
          duration: 1,
          ease: "power1.inOut",
          scale: true,
          onComplete: () =>
            gsap.to(".willHidden", {
              y: "0px",
              duration: 0.5,
              ease: "power1.out",
            }),
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className="flex justify-between p-2.5 items-center w-full navBar h-16 nav order-1 relative z-[99]">
      <div className="grow tex-left willHidden">
        <p>Piseth SOK</p>
        <p>@Ace</p>
      </div>
      <ul className="bg-stone-400 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 z-99 absolute left-[50%] translate-x-[-50%] linkContainer gap-4 tex-left flex justify-center items-center p-2 px-3 rounded-md order-2" ref={container}>
        <li className="activeNav">
          <Link to="/" className="text-link" />
          home
        </li>
        <li className="NavLinks">
          <Link to="/about" className="text-link" />
          about
        </li>
        <li className="NavLinks">
          <Link to="/project" className="text-link" />
          project
        </li>
        <li className="NavLinks">
          <Link to="/contact" className="text-link" />
          contact
        </li>
      </ul>

      <div className="grow text-right willHidden order-3">
        <button className="bg-white text-black p-1.5 px-4 rounded-full">Get connect</button>
      </div>
    </nav>
  );
}
