import React, { ReactElement, ReactNode } from "react";
const CardsArray = [
  {
    img: "girl.png",
    title: "FASHION STORE",
    desc: "Shop ladies fashion at Missguided USA With hundreds of new styles Hitting our shelves every week",
  },
  {
    img: "home.png",
    title: "HOME FURNITURE",
    desc: "Provides superior quality furniture and mattresses at a price that customers can easily afford",
  },
  {
    img: "man.png",
    title: "SUPER GADGET STORE",
    desc: "Specialize in selling unique gifts , cool gadets, outdoor gear and fab toys.",
  },
];
export default function CardsSection() {
  const cards = CardsArray.map((card, index) => (
    <div
      key={index}
      className="p-3  bg-white rounded-lg  shadow-lg hover:shadow-lg transition"
    >
      <div className="w-full rounded-lg h-48 overflow-hidden mb-2">
        <img src={`${card.img}`} className="w-full h-full object-cover  " />
      </div>
      <div className="px-5 py-8 md:py-3">
        <h3 className="text-xl md:text-lg font-bold text-gray-800 mb-6 md:mb-2">
          {card.title}
        </h3>
        <p className="text-gray-400 leading-relaxed  ">{card.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="max-w-7xl mx-auto  px-4 md:px-0 grid grid-cols-1 md:grid-cols-3   gap-16 max-lg:gap-3">
      {cards}
    </div>
  );
}
