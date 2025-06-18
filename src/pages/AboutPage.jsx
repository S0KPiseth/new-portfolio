import SectionHeader from "../components/SectionHeader";
import ValueSect from "../components/ValueSect";
import TechStackSect from "../components/TechStackSect";
export default function AboutPage() {
  return (
    <section className="min-h-screen test">
      <div className=" relative z-50">
        {/* <SectionHeader headerName="About" /> */}
        <p className="p-2.5 opacity-60">(ABOUT)</p>
      </div>
      <br />
      <div className="flex flex-col justify-center items-center gap-2.5">
        <p className="font-secondary text-3xl text-center indent-50 w-11/12 mx-auto">Lorem ipsum dolor sit amet consectetur. Pellentesque fusce urna quis tortor velit. Interdum vitae neque cursus feugiat tristique dis eu UX/UI. Morbi laoreet felis ultrices sit viverra commodo eget risus. Vulputate ut nisi eget amet orci quisque diam.</p>
        <br />
        <div className="bg-[url('./image/3d.png')] bg-cover w-1/3 aspect-square  bg-gray-400 rounded-md">&nbsp;</div>
      </div>
      <br />
      <ValueSect />
      <TechStackSect />
    </section>
  );
}
