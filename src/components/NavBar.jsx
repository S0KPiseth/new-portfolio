import { useGSAP } from "@gsap/react";
import { Link } from "react-router";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [localTime, setLocalTime] = useState("");
  //update time
  useEffect(() => {
    const setTimeId = setInterval(() => {
      const date = new Date();
      const timeString = date.toLocaleTimeString("en-US", { timeZone: "Asia/Phnom_Penh" });
      setLocalTime(timeString);
    }, 1000);
    return () => {
      clearInterval(setTimeId);
    };
  }, []);

  return (
    <nav className="flex p-2.5 items-start w-full h-16 navBar nav order-1 relative z-[99] justify-center md:justify-evenly font-semibold font-[Geist] lg:text-[1vw]">
      {/* Location */}
      <div className="text-left uppercase hidden md:block md:w-1/6 lg:w-1/8 flex-1 invisible toBreveal">
        <p>Phnom Penh</p>
        <p>Cambodia</p>
      </div>

      {/* Local Time */}
      <div className="hidden md:block md:w-1/6 lg:w-1/8 flex-1 text-center invisible toBreveal">
        <p>{localTime}</p>
      </div>

      {/* Gmail + Contact */}
      <div className="hidden lg:flex items-center justify-center lg:w-1/5">
        <div className="flex flex-col text-left invisible toBreveal">
          <a href="mailto:piseth.sok.dev@gmail.com">piseth.sok.dev@gmail.com</a>
          <a href="https://t.me/PisethS0K">+855 967317030</a>
        </div>
      </div>

      <div className="h-full flex justify-center w-28 flex-shrink-0 originalContainer relative"></div>

      {/* Catching Phrase */}
      <div className="hidden lg:flex items-center justify-center lg:w-1/5">
        <div className="flex flex-col text-center invisible toBreveal">
          <p>You worry about the what and why.</p>
          <p>I’ll handle the how.</p>
        </div>
      </div>

      {/* IG */}
      <div className="hidden md:block md:w-1/6 lg:w-1/8 text-center flex-1 invisible toBreveal">
        <p>IG</p>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex flex-col items-end md:w-1/6 lg:w-1/8 flex-1 text-right invisible toBreveal">
        <li>
          <Link to="/" className="text-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/project" className="text-link">
            project
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-link">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
