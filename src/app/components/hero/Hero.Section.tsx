import React from "react";
import SearchInput from "./SearchInput";

export default function HeroSection() {
  return (
    <section className="flex gap-8 landing ">
      <div className="    max-xl:hidden">
        <img
          src="hero.png"
          alt="James Bruno"
          className=" h-full w-full rounded-lg"
        />
      </div>
      <div className=" px-4 flex flex-col lg:gap-16 max-md:gap-6 text-center  justify-center  items-center">
        <div className="  lg:mb-0 lg:w-[50%]   lg:text-left">
          <h1 className="lg:text-6xl text-4xl text-center font-extrabold text-gray-800 ">
            We Help You Build & Grow an Online Business
          </h1>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
    </section>
  );
}
