import Name from "../components/Name";
import NavBar from "../components/NavBar";
export default function Homepage() {
  return (
    <section className="h-screen flex flex-col p-2.5 pt-0 justify-evenly relative">
      <div className="invisible">
        <NavBar />
      </div>

      <p className="font-secondary w-9/12 text-3xl uppercase">Lorem ipsum dolor sit amet consectetur. Ultricies nibh curabitur tincidunt auctor gravida eget. Diam eget aliquet eget nulla tincidunt. Gravida phasellus nunc phasellus adipiscing eget.</p>
      <div className="flex justify-end">
        <div className="text-9xl flex flex-col items-center">
          <p className='font-["Luxurious_Script"] '>web</p>
          <p className="font-secondary">
            dev<i>e</i>loper
          </p>
        </div>
      </div>
      <div className=" rounded-b-lg absolute w-74 aspect-video bg-[url('./image/travel.png')] bg-cover left-1/3 bottom-28 z-[-1]"></div>
      <div className="grow flex justify-center">
        <Name />
      </div>
    </section>
  );
}
