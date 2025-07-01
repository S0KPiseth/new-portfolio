export default function LanguageCategory(props) {
  return (
    <>
      <div className="relative grid grid-cols-2 grid-rows-[max-content_auto] h-screen gap-y-10 languageHeader bg-white">
        <div className="grid col-span-2 row-span-1 row-start-1 grid-cols-2 nameAndIdx lg:text-[4vw] text-3xl p-2.5">
          <hr className="w-full h-0.5 opacity-50 col-span-2" />

          <p className=" font-bold col-start-1 col-span-1 col-end-1">{props.index}</p>
          <p className=" uppercase font-semibold col-start-2">{props.name}</p>
        </div>
        <div className="md:w-10/12 text-xl row-start-2 md:col-start-2 col-span-2 md:col-span-1 p-2.5 md:p-0">
          <p className="font-secondary font-medium opacity-80 text-xl">{props.description}</p>
          {props.language.map((row, i) => (
            <div key={i} className="font-secondary font-medium lg:text-2xl">
              <p className="md:py-3.5 py-2">{row.join(", ")}</p>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
