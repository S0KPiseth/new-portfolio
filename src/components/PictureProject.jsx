import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VIDEO_EXTENSIONS = ["mp4", "webm", "ogg", "mov", "avi"];

function isVideo(src) {
  if (!src) return false;
  const ext = src.split("?")[0].split(".").pop().toLowerCase();
  return VIDEO_EXTENSIONS.includes(ext);
}

export default function PictureProject(props) {
  const containerRef = useRef();
  const videoRef = useRef();
  const { contextSafe } = useGSAP();

  const projectIsVideo = isVideo(props.project.image);

  const handleHover = contextSafe(() => {
    if (projectIsVideo) {
      gsap.to(videoRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out",
      });
      videoRef.current?.play();
    } else {
      gsap.fromTo(
        containerRef.current,
        { backgroundSize: "100% auto" },
        { backgroundSize: "120% auto" },
      );
    }
  });

  const handleMouseOut = contextSafe(() => {
    if (projectIsVideo) {
      gsap.to(videoRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      videoRef.current?.pause();
    } else {
      gsap.fromTo(
        containerRef.current,
        { backgroundSize: "120% auto" },
        { backgroundSize: "100% auto" },
      );
    }
  });

  useEffect(() => {
    if (!projectIsVideo && containerRef.current) {
      containerRef.current.style.backgroundImage = `url(${props.project.image})`;
    }
  }, []);

  return (
    <div>
      {projectIsVideo ? (
        <div
          className="w-full aspect-[16/8] flex items-end mx-auto overflow-hidden picProject cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseOut}
          onClick={() => window.open(props.project.link)}
        >
          <video
            ref={videoRef}
            src={props.project.image}
            className="w-full h-full object-cover"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
          />
        </div>
      ) : (
        <div
          className="bg-size-[100%_auto] w-full aspect-[16/8] bg-center flex items-end mx-auto bg-no-repeat picProject cursor-pointer"
          ref={containerRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseOut}
          onClick={() => window.open(props.project.link)}
        />
      )}

      <div>
        <div className="flex justify-between items-center">
          <p className="uppercase md:text-xl text-[2.5vw]">
            {props.project.name}
          </p>
          <p>{props.project.year}</p>
        </div>
        <p className="text-[1.5vw] md:text-sm opacity-50">
          {props.project.field.join(", ")}
        </p>
      </div>
    </div>
  );
}
