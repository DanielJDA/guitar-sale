import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Filters() {
  return (
    <div className="border-b bg-white my-8 w-full z-0 flex-centered">
      <div className="px-4 w-full flex-centered flex-wrap md:space-x-8">
        <section className="mt-2 w-11/12 relative">
          <input
            type="text"
            name="name"
            //value={filters?.name}
            //onChange={handleFilterUpdate}
            placeholder="FILTER BY NAME"
            className="border-b w-full font-semibold border-black focus:outline-none"
          />
          <button className="absolute right-0 top-0 text-2xl px-2">
            <BsArrowRight />
          </button>
        </section>
      </div>
    </div>
  );
}
