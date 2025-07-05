import { useEffect } from "react";
const CustomCursor = (props) => {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return <img data-load-src="./cursor/cursor.png" className="h-20 absolute z-[999] top-0 pointer-events-none" id="cursor" />;
};
export default CustomCursor;
