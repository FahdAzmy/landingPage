import React from "react";
import MainButton from "./MainButton";

export default function WeDo() {
  return (
    <div className="lg:w-1/3  ">
      <span className="text-yellow-600 text-md  font-medium tracking-wider">
        WHAT WE DO
      </span>
      <h2 className="text-5xl text-black lg:line-clamp-3  font-bold mt-8">
        Increase our Customers Sales
      </h2>
      <p className="text-gray-500 mt-6  text-lg ">
        Our customers are seeing big results within the first three months
      </p>
      <div className="mt-14 ml-2 ">
        <MainButton />
      </div>
    </div>
  );
}
