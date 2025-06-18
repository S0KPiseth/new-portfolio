export default function LanguageCategory(props) {
  return (
    <>
      <div className="relative grid grid-cols-2 grid-rows-[max-content_auto] h-screen gap-y-10 languageHeader bg-white">
        <div className="grid col-span-2 row-span-1 row-start-1 grid-cols-2 nameAndIdx">
          <hr className="w-full h-0.5 opacity-50 col-span-2" />
          <br />
          <p className="text-5xl font-bold col-start-1 col-span-1 col-end-1">{props.index}</p>
          <p className="text-5xl uppercase font-semibold col-start-2">{props.name}</p>
          <br />
        </div>
        <div className="w-10/12 text-xl row-start-2 col-start-2">
          <p className="font-secondary font-medium opacity-80 text-xl">{props.description}</p>
          {props.language.map((row, i) => (
            <div key={i} className="font-secondary font-medium text-2xl">
              <p>{row.join(", ")}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
