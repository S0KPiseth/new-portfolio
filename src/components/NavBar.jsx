import { useEffect, useState } from "react";

export default function NavBar({ scroll }) {
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
          <a href="mailto:piseth.sok.dev@gmail.com" target="blank" className="text-link">
            piseth.sok.dev@gmail.com
          </a>
          <a href="https://t.me/PisethS0K" target="blank" className="text-link">
            +855 967317030
          </a>
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
        <a href="https://www.instagram.com/s0kpiseth/" target="blank" className="text-link">
          IG
        </a>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex flex-col items-end md:w-1/6 lg:w-1/8 flex-1 text-right invisible toBreveal">
        <li className="text-link" onClick={() => scroll(".homePage")}>
          home
        </li>
        <li className="text-link" onClick={() => scroll(".test")}>
          about
        </li>
        <li className="text-link" onClick={() => scroll(".test2")}>
          project
        </li>
        <li className="text-link" onClick={() => scroll(".contact")}>
          contact
        </li>
      </ul>
    </nav>
  );
}
