import React from "react";
import { ArrowRight, ChevronRight, ShoppingCart } from "lucide-react";
import MainButton from "./MainButton";
import Image from "next/image";

const DetialsSection = () => {
  return (
    <div className="container  details mx-auto  px-8 pt-10 mb-24 mt-10">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center justify-between  gap-20">
        <div className="max-w-md">
          <h3 className="text-yellow-400 font-medium mb-4">WE HELP YOU</h3>
          <h1 className="text-4xl md:text-5xl text-black font-bold mb-6">
            Sell
            <br />
            Stunning
            <br />
            Products
          </h1>
          <p className="text-gray-600 mb-8">
            We'll guide you through our unique 5-step
            <br />
            brand-building framework
          </p>
          <MainButton />
        </div>

        {/* Right Section - Product Cards */}
        <div className=" max-lg:hidden">
          {/* Product Cards */}
          <div className="flex relative gap-24  ">
            <div className="absolute right-64">
              {/* Minimal Chair Card */}
              <div className=" absolute bottom-20 -left-10 w-64 h-64 bg-yellow-200 rounded-full  " />
              {/* Image  */}
              <div className="  w-[70%] absolute bottom-12 left-6 h-full  mb-4 z-10 ">
                <Image src="Chair.png" alt="Minimal Chair" />
              </div>
              <div className="bg-white flex    p-4 h-48 rounded-lg shadow-lg w-48 relative">
                {/* Price */}
                <div className="flex flex-col z-10 h-full w-full absolute top-20  gap-3  pr-2 left-0 ">
                  <div>
                    <h3 className="font-semibold text-black text-center ">
                      Minimal Chair
                    </h3>
                  </div>
                  <div className="bg-gray-100 mx-auto  h-0.5 w-[90%]"></div>
                  <div className="p-2  text-black flex justify-between items-center px-3 ">
                    <div>
                      <p className="font-medium  text-yellow-500">$204.00</p>
                    </div>
                    <ShoppingCart size={15} />
                  </div>
                </div>
              </div>
            </div>
            {/* Beats Headphone Card */}
            <div className="absolute -left-48 top-40">
              <div className="absolute bottom-16  -right-8 w-60 h-60 bg-purple-200 rounded-full " />
              <div className="bg-white flex   p-4 h-48 rounded-lg shadow-lg w-48 relative">
                <div className=" w-[70%] absolute bottom-24 right-3 h-40  mb-4 ">
                  <Image src="Headphone.png" alt="HeadPhone" />
                </div>
                <div className="flex flex-col h-full w-full absolute top-20 gap-3  pr-2 left-0 ">
                  <div>
                    <h3 className="font-semibold text-black text-center ">
                      Minimal Chair
                    </h3>
                  </div>
                  <div className="bg-gray-100 mx-auto  h-0.5 w-[90%]"></div>
                  <div className="p-2  text-black flex justify-between items-center px-3 ">
                    <div>
                      <p className="font-medium  text-yellow-500">$204.00</p>
                    </div>
                    <ShoppingCart size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetialsSection;
