import React from "react";
import MainButton from "./MainButton";
import WeDo from "./WeDo";
import { FaCaretUp } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div className="p-12 w-full   rounded-lg  flex items-center  justify-around gap-16 max-lg:gap-20">
      {/* Left Section */}
      <div className="relative flex flex-col gap-8 max-md:hidden">
        {/* First Metric */}
        <div className="absolute -bottom-4 -left-16 w-48  h-48 bg-[rgb(75,166,224)]  rounded-full " />
        <div className="relative bg-white rounded-2xl flex items-center shadow-lg  px-9 py-7 w-80 h-32 ">
          <img src="blueLine.png" className="absolute -bottom-12 -right-8" />
          <div className="flex items-center  gap-6 ">
            <div className="relative ">
              <div className="w-12 h-12 z-10 rounded-full  overflow-hidden ring-8 ring-gray-100  ">
                <img
                  src="manblue.png"
                  alt="Profile"
                  className="w-full h-full  object-cover"
                />
                <div
                  className="absolute top-[-4px] left-[-3px]  w-14 h-14 border-2 border-purple-500 rounded-full"
                  style={{ clipPath: "inset(0 0 0 48%)" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col  ">
              <div>
                <h3 className="text-2xl flex items-center gap-2  text-black tracking-tighter font-bold">
                  $ {(7654).toLocaleString()}{" "}
                  <FaCaretUp
                    className=" p-[8px] w-3 h-3 inline bg-purple-600   rounded-full  text-black "
                    color="black"
                  />
                </h3>
              </div>
              <div className="flex items-center tracking-tighter text-[10px]  w-full   mt-1">
                <span className=" text-black">TOTAL REVENUE</span>
                <span className="text-green-600  ">+$232</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Metric */}
        <div className="absolute top-48 left-10  ">
          <div className="absolute top-1  -right-10 w-40 h-40 bg-[rgb(82,199,131)]  rounded-full " />

          <div className="relative  bg-white rounded-2xl flex   shadow-lg  px-9 py-7 w-80 h-32 ">
            <img
              src="greenLine.png"
              className="absolute -bottom-10  right-28"
            />

            <div className="flex items-center absolute left-[70px] bottom-8 w-full  gap-10  ">
              <div className="flex flex-col   ">
                <div>
                  <h3 className="text-2xl flex items-center gap-2  text-black tracking-tighter font-bold">
                    $ {(7654).toLocaleString()}{" "}
                    <FaCaretUp
                      className=" p-[8px] w-3 h-3 inline bg-purple-600   rounded-full  text-black "
                      color="black"
                    />
                  </h3>
                </div>
                <div className="flex items-center tracking-tighter text-[10px]  w-full   mt-1">
                  <span className=" text-black">TOTAL REVENUE</span>
                  <span className="text-green-600  ">+$232</span>
                </div>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full   overflow-hidden ring-8 ring-gray-100  ">
                  <img
                    src="mangray (1).png"
                    alt="Profile"
                    className="w-full h-full  object-cover"
                  />
                  <div
                    className="absolute top-[-4px] left-[-3px]  w-14 h-14 border-2 border-purple-500 rounded-full"
                    style={{ clipPath: "inset(0 0 0 48%)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Lines */}
      </div>
      {/* Right Section */}
      <WeDo />
    </div>
  );
};

export default StatsSection;
