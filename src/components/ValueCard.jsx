import loopSvg from "../assets/loop.svg";
export default function ValueCard(props) {
  return (
    <div className={`w-1/3 border-white aspect-square flex flex-col justify-evenly p-2.5 border-y-2 ${props.isMiddle && "border-x-2"}`}>
      <h2 className="text-5xl">Perfectionism</h2>
      <p className="font-secondary text-white opacity-60 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repudiandae saepe, consequatur perspiciatis doloribus vitae nobis suscipit repellendus qui accusamus nam est amet ut soluta! Iure error rerum minima quis!</p>
      <div>
        <img className="float-right w-1/4" data-load-src={loopSvg} alt="" />
      </div>
    </div>
  );
}
