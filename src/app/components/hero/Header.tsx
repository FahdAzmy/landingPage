import React from "react";

export default function Header() {
  return (
    <div className="w-full flex justify-between px-8 fixed pt-3 ">
      {/* logo */}
      <h1 className="text-black font-bold">Hurrble</h1>
      {/* Buttons */}
      <div className=" text-black font-semibold  flex gap-6">
        <button className=" text-md  underline">Get Started Now</button>
        <button className="px-3 py-1 text-sm  bg-slate-200 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
