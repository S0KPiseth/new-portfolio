import loopSvg from "../assets/loop.svg";
export default function ValueCard(props) {
  return (
    <div className={`md:w-1/3 border-white aspect-square flex flex-col justify-evenly p-2.5  ${props.isMiddle && "sm:border-x-2 border-y-0"} border-y-2`}>
      <h2
        className="lg:text-[3vw] text-3xl
"
      >
        Perfectionism
      </h2>
      <p
        className="text-xl font-secondary text-white opacity-60 sm:text-[1.4vw] lg:text-[1.4vw]
"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae saepe, consequatur perspiciatis doloribus vitae nobis suscipit repellendus qui accusamus nam est amet ut soluta! Iure error rerum minima quis!
      </p>
      <div>
        <img className="float-right w-1/4" data-load-src={loopSvg} alt="" />
      </div>
    </div>
  );
}
