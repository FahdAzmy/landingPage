import { ChevronRight } from "lucide-react";
import React from "react";

export default function MainButton() {
  return (
    <div className="bg-purple-500 w-60 text-white rounded-full flex items-center justify-between  hover:bg-purple-600 transition-colors">
      <button className=" px-8 py-3  font-semibold">MORE DETAILS</button>
      <div className=" flex justify-center items-center  w-12  h-12  border-[2px] border-purple-500 rounded-full   bg-white text-purple-500">
        <ChevronRight size={25} className="mb-1 ml-1" color="purple" />
      </div>
    </div>
  );
}
