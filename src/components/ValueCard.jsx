export default function ValueCard(props) {
  return (
    <div className={`md:w-1/3 border-white aspect-square flex flex-col justify-evenly p-2.5  ${props.isMiddle && "sm:border-x-2 border-y-0"} border-y-2 `}>
      <h2 className="lg:text-[3vw] text-3xl valueCardHeader ">{props.value.name}</h2>
      <p className="text-xl font-secondary text-white opacity-60 sm:text-[1.4vw] lg:text-[1.4vw] valueParaGraph">{props.value.description}</p>
      <div className="valueCardContainer">{props.svg || null}</div>
    </div>
  );
}
