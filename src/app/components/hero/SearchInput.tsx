import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchInput() {
  return (
    <div className=" flex  justify-center ">
      <div className="relative">
        <input
          type="text"
          placeholder="Tell us what you need to build..."
          className="px-5 py-5 rounded-lg   lg:min-w-[500px] max-md:min-w-80 min-w-80  shadow-xl  text-black "
        />
        <button className="bg-customPurple absolute  text-white px-2  py-2 rounded-lg bottom-3 right-3 ">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
