import SvgOffer from "../../ui/SvgOffer";

function Featured() {
  return (
    <div className=" flex  gap-7">
      <SvgOffer />
      <div className=" flex flex-col  space-y-3 px-4">
        <h1 className="w-max border-b-2 border-b-red-500 text-xl text-red-500">
          Featured
        </h1>
        <h2 className=" text-4xl  font-semibold text-slate-950">
          Dare to Dominate:{" "}
          <span className="  border-red-500  text-red-500">Nike's</span> Boldest
          Picks Await.
        </h2>
        <p className="   text-lg text-slate-700">
          {" "}
          Step into a world of unparalleled style and performance with Nike's
          latest collection. From striking designs that make a statement to
          cutting-edge technology that elevates your performance, our boldest
          picks are a testament to the relentless pursuit of excellence.{" "}
        </p>

        <button className=" w-max rounded-lg bg-red-500 px-3 py-3 text-xl text-slate-50">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Featured;
