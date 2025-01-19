import Image from "next/image";
import React from "react";

export default function Companies() {
  const images = [
    {
      src: "MediaLogo.jpg",
      alt: "Media Company Logo",
    },
    {
      src: "OnliveLogo.jpg",
      alt: "Onlive Logo",
    },
    {
      src: "SmartLogo.jpg",
      alt: "Smart Logo",
    },
    {
      src: "WestenLogo.jpg",
      alt: "Westen Logo",
    },
    {
      src: "IcomLogo.jpg",
      alt: "Icom Logo",
    },
  ];
  const Logos = images.map((image) => (
    <Image
      src={`/${image.src}`}
      alt={`${image.alt}`}
      className="w-16 md:w-16 h-auto object-contain transition-transform hover:scale-110"
    />
  ));
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Title section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="font-medium text-lg md:text-xl text-black">
            Companies we've helped build
          </h2>
        </div>

        {/* Logos section */}
        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 flex-wrap justify-center md:justify-start">
          {Logos}
        </div>
      </div>
    </div>
  );
}
