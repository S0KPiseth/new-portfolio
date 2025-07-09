import ImagesLoaded from "imagesloaded";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import Flip from "gsap/Flip";

import ScrollTrigger from "gsap/ScrollTrigger";

import ScrollToPlugin from "gsap/ScrollToPlugin";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import HanumanSvg from "./components/HanumanSvg";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ContactPage from "./pages/ContactPage";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, Flip, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText, MotionPathPlugin);

function App() {
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const hanumanRef = useRef(null);
  const progressTextRef = useRef(null);

  const smoothRef = useRef(null);

  const scroll = (location) => {
    smoothRef.current.scrollTo(location, true, "top top");
  };

  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    const landingTl = gsap.timeline();
    gsap.set(".hanuman", {
      drawSVG: `0%`,
    });
    const imageLoad = new ImagesLoaded("body", { background: true }, onLoaded);
    const totalImage = imageLoad.images.length;
    imageLoad.on("progress", (instance, image) => {
      const progress = instance.progressedCount / totalImage;
      gsap.to(".hanuman", {
        drawSVG: `0% ${Math.round(progress * 100)}%`,
      });

      progressTextRef.current.textContent = `${Math.round(progress * 100)}%`;
    });
    function onLoaded() {
      landingTl
        .to("body", {
          background: "#101010",
          color: "white",
        })
        .to(
          ".homePage",
          {
            background: "#101010",
            color: "white",
            duration: 1,
            onComplete: () => {
              gsap.to(progressTextRef.current, { opacity: 0 });
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
                        const temp = document.getElementById("temp");
                        // document.querySelector(".homePage").appendChild(nameRef.current);

                        nameRef.current.classList.remove("absolute", "left-1/2", "top-1/2", "-translate-x-1/2", "-translate-y-1/2", "items-end", "h-fit");
                        temp.classList.add("items-center");

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

                            contentRef.current.classList.remove("hidden");
                            smoothRef.current = ScrollSmoother.create({
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
          },
          "<"
        );
    }
    // ScrollTrigger.create({ trigger: ".test2", start: "top bottom", endTrigger: ".projectIntro", end: "bottom bottom", pin: ".tech", pinSpacing: false });
  }, []);
  return (
    <>
      <div id="wrapper">
        <div id="content">
          <section className="bg-white text-black h-screen  w-screen homePage relative">
            <header className="w-full z-[99] headerNav hidden" ref={navRef}>
              <NavBar scroll={scroll} />
            </header>
            <div className="flex justify-center h-full w-full relative" id="temp">
              <HanumanSvg hanumanRef={hanumanRef} />
              <div className="hidden h-1/12 md:h-fit w-full p-2.5 items-end absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white " ref={nameRef}>
                <img src="./image/name/p.png" alt="" className="w-1/6 order-1 opacity-0 letter " />
                <img src="./image/name/s.png" alt="" className="w-1/6 order-3 opacity-0 letter " />
                <img src="./image/name/e.png" alt="" className="w-1/6 order-4 opacity-0 letter " />
                <img src="./image/name/tt.png" alt="" className="w-1/6 order-5 opacity-0 letter " />
                <img src="./image/name/h.png" alt="" className="w-1/6 order-6 opacity-0 letter " />
              </div>
              <p className="font-[Notable] text-6xl absolute bottom-[5%] right-[5%] progress" ref={progressTextRef}>
                0%
              </p>
            </div>

            <div className="flex-col justify-evenly hidden landingElements z-10 max-h-screen">
              <div className="flex-col flex lg:flex-row grow lg:justify-evenly justify-center items-center lg:items-stretch landingContentWrapper md:flex-col-reverse">
                <div className="lg:w-1/2 w-full">
                  <br className="hidden lg:block" />
                  <p className="font-secondary lg:text-[1.5vw] uppercase invisible toBreveal p-2.5 lg:self-start md:w-10/12 lg:w-full font-medium">I design and develop modern, high-performing websites with care and commitment. Each project reflects my dedication to clean code and seamless UX. Your vision is the blueprint, and I bring it to life with precision.</p>
                </div>
                <div className="lg:w-1/6 w-full absolute lg:static h-[80vh] lg:h-auto md:z-99 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-0">
                  <img src="./image/visnu.png" alt="Visnu Statue" className="object-contain w-full h-full visnuStatue scale-0" />
                </div>
                <div className="w-fit absolute z-50 left-1/2 top-3/5 translate-x-[-50%] translate-y-[-50%] text-[15vw]/[1.1] md:hidden">
                  <p className='font-["Luxurious_Script"] text-right'>web</p>
                  <p className="font-secondary font-medium">developer</p>
                  <br className="hidden lg:block" />{" "}
                </div>
                <div className="md:flex grow lg:w-1/2 lg:text-[9vw]/[1.1] self-center hidden md:text-[15vw]/25 md:self-start lg:self-center">
                  <div className="h-fit place-items-center lg:place-items-center md:place-items-start md:p-2.5 lg:p-0">
                    <p className='font-["Luxurious_Script"] invisible toBreveal'>web</p>
                    <p className="font-secondary invisible toBreveal font-medium">developer</p>
                    <br className="hidden lg:block" />
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
        {/* <CustomCursor /> */}
      </div>
    </>
  );
}

export default App;
