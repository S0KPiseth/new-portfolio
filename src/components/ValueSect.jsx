import ValueCard from "../components/ValueCard";
export default function ValueSect() {
  return (
    <div className="flex flex-col gap-y-25">
      <div>
        <p className="text-xl p-2.5 pb-0">Value</p>
        <span className="uppercase flex font-secondary justify-evenly text-4xl font-semibold p-2.5">
          <p className="grow">Cover</p>
          <p className="grow text-center">me</p>
          <p className="grow text-center">in</p>
          <p className="grow text-right">debris</p>
        </span>
      </div>

      <p className="text-3xl text-right p-2.5 indent-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nihil cupiditate officiis aperiam natus possimus, delectus maiores voluptas iure quas harum vel consequuntur laudantium ab quasi quaerat ratione distinctio velit.</p>

      <div className="flex">
        <ValueCard />
        <ValueCard isMiddle={true} />
        <ValueCard />
      </div>
    </div>
  );
}
