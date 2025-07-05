import { BrowserRouter as Router, Routes, Route, useLocation, data } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import Flip from "gsap/Flip";

import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import HanumanSvg from "./components/HanumanSvg";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ContactPage from "./pages/ContactPage";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, Flip, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText, MotionPathPlugin);

function App() {
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const hanumanRef = useRef(null);
  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    gsap.set(".hanuman", {
      drawSVG: `0%`,
    });
    let currentIndex = 0;
    const images = document.images;
    const total = images.length;
    const landingTl = gsap.timeline();
    function loadNextImage() {
      if (currentIndex >= total) {
        landingTl.to(".homePage", {
          background: "#101010",
          color: "white",
          duration: 1,
          onComplete: () => {
            nameRef.current.classList.add("flex");
            nameRef.current.classList.remove("hidden");
            const state = Flip.getState(hanumanRef.current);
            nameRef.current.appendChild(hanumanRef.current);
            hanumanRef.current.classList.add("w-1/6", "h-full");

            Flip.from(state, {
              scale: true,
              duration: 1,
              ease: "expoScale(0.5,7,none)",
              onComplete: () => {
                landingTl.fromTo(
                  ".letter",
                  { opacity: 0, rotateX: 90, scale: 0.9 },
                  {
                    opacity: 1,
                    rotateX: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    stagger: 0.1,
                    onComplete: () => {
                      // document.querySelector(".homePage").appendChild(nameRef.current);
                      nameRef.current.classList.remove("absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "items-end", "h-fit");
                      nameRef.current.classList.add("items-center", "h-full");
                      const newState = Flip.getState(nameRef.current);
                      navRef.current.style.display = "block";
                      navRef.current.querySelector(".originalContainer").appendChild(nameRef.current);

                      const landingSection = document.querySelector(".landingElements");
                      landingSection.classList.add("flex");
                      landingSection.classList.remove("hidden");

                      hanumanRef.current.style.strokeWidth = "3px";
                      hanumanRef.current.classList.add("h-full");

                      Flip.from(newState, {
                        scale: true,
                        duration: 1,
                        ease: "sine.inOut",
                        onUpdate: () => {
                          gsap.to(".visnuStatue", { scale: 1 });
                        },
                        onStart: () => {
                          const temp = document.getElementById("temp");
                          temp.remove();

                          let text = SplitText.create(".toBreveal", { type: "lines", mask: "lines" });
                          let nameText = SplitText.create(".nameText", { type: "chars" });
                          gsap.to(".toBreveal", { visibility: "visible" });
                          gsap.to(".nameText", { visibility: "visible" });

                          gsap.from(nameText.chars, { yPercent: 50, opacity: 0, scale: 0.7, stagger: 0.05 });
                          gsap.from(text.lines, {
                            y: 100,
                            autoAlpha: 0,
                            stagger: 0.05,
                          });
                          gsap.fromTo(
                            ".landingVisual",
                            {
                              visibility: "invisible",
                              scale: "0",
                            },
                            {
                              visibility: "visible",
                              scale: "1",
                            }
                          );
                          contentRef.current.classList.remove("hidden");
                          ScrollSmoother.create({
                            wrapper: "#wrapper",
                            content: "#content",
                            smooth: 1,
                          });
                          document.querySelector(".test2").classList.remove("hidden");
                          // skillScroller();

                          const landingElementsChildren = gsap.utils.toArray(document.querySelector(".landingContentWrapper").children);
                          const myName = document.querySelector(".name");
                          if (myName) {
                            myName.classList.add("flex");
                            myName.classList.remove("hidden");
                            landingElementsChildren.push(myName);
                          }

                          landingElementsChildren.forEach((ele) =>
                            gsap.to(ele, {
                              scrollTrigger: {
                                trigger: ele,
                                start: "top top",
                                end: "bottom top",
                                scrub: true,
                              },
                              opacity: 0,
                            })
                          );
                        },
                      });
                    },
                  }
                );
              },
            });
          },
        });
      }
      const img = images[currentIndex];
      const src = img.dataset.loadsrc || img.getAttribute("data-load-src");
      img.src = src;

      img.onload = img.onerror = function () {
        currentIndex++;
        const percent = Math.ceil((currentIndex / total) * 100);
        landingTl.to(".hanuman", {
          drawSVG: `0% ${percent}%`,
        });

        loadNextImage();
      };
    }
    loadNextImage();
    // ScrollTrigger.create({ trigger: ".test2", start: "top bottom", endTrigger: ".projectIntro", end: "bottom bottom", pin: ".tech", pinSpacing: false });
  }, []);
  return (
    <>
      <Router>
        <div id="wrapper">
          <div id="content">
            <section className="bg-white text-black h-screen  w-screen homePage relative">
              <header className="w-full z-[99] headerNav hidden" ref={navRef}>
                <NavBar />
              </header>
              <div className="flex justify-center h-full w-full relative" id="temp">
                <HanumanSvg hanumanRef={hanumanRef} />
                <div className="hidden h-1/12 md:h-fit w-full p-2.5 items-end absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" ref={nameRef}>
                  <img data-load-src="./image/name/p.png" alt="" className="w-1/6 order-1 opacity-0 letter " />
                  <img data-load-src="./image/name/s.png" alt="" className="w-1/6 order-3 opacity-0 letter " />
                  <img data-load-src="./image/name/e.png" alt="" className="w-1/6 order-4 opacity-0 letter " />
                  <img data-load-src="./image/name/tt.png" alt="" className="w-1/6 order-5 opacity-0 letter " />
                  <img data-load-src="./image/name/h.png" alt="" className="w-1/6 order-6 opacity-0 letter " />
                </div>
              </div>

              <div className="flex-col justify-evenly relative hidden landingElements z-10 max-h-screen">
                <div className="flex-col flex md:flex-row grow md:justify-evenly justify-center items-center md:items-stretch landingContentWrapper">
                  <div className="md:w-1/2 w-full">
                    <br className="hidden md:block" />
                    <p className="font-secondary md:text-[1.5vw] uppercase invisible toBreveal p-2.5 md:self-start">I design and develop modern, high-performing websites with care and commitment. Each project reflects my dedication to clean code and seamless UX. Your vision is the blueprint, and I bring it to life with precision.</p>
                  </div>
                  <div className="md:w-1/6 absolute top-30 md:static h-[70vh] md:h-auto">
                    <img data-load-src="./image/visnu.png" alt="Visnu Statue" className="md:w-full h-full visnuStatue scale-0" />
                    <div className="w-full absolute z-50 left-[50%] top-[70%] translate-x-[-50%] translate-y-[-50%] text-[15vw] md:hidden">
                      <p className='font-["Luxurious_Script"] text-right'>web</p>
                      <p className="font-secondary font-medium">developer</p>
                      <br />
                    </div>
                  </div>
                  <div className="md:flex grow md:w-1/2 md:text-[9vw]/27 self-center hidden">
                    <div className="h-fit place-items-center">
                      <p className='font-["Luxurious_Script"] invisible toBreveal'>web</p>
                      <p className="font-secondary invisible toBreveal font-medium">developer</p>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 lg:bottom-[-70px] z-1  justify-center w-screen text-[20.5vw] font-[Notable] name hidden">
                <p className="invisible opacity-100 nameText">PISETH</p>
              </div>
            </section>
            <div ref={contentRef} className="hidden h-fit">
              <AboutPage />
              {/* <Projects /> */}
              <ContactPage />
            </div>
          </div>
          <CustomCursor />
        </div>
      </Router>
    </>
  );
}

export default App;
