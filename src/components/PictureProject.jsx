import { useEffect, useRef } from "react";
export default function PictureProject(props) {
  const containerRef = useRef();
  useEffect(() => {
    if (!containerRef) return;
    containerRef.current.style.backgroundImage = `url(${props.image})`;
  }, []);

  return (
    <div className="bg-cover w-screen aspect-[16/8] bg-center flex items-end" ref={containerRef}>
      <div className="bg-[linear-gradient(0deg,rgba(16,16,16,0.84)_0%,rgba(87,199,133,0)_100%)] p-2.5 w-full">
        <p className="uppercase text-xl">{props.name}</p>
        <p className="text-sm opacity-50">{props.field}</p>
      </div>
    </div>
  );
}
