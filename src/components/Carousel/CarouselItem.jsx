import React from "react";
import { m } from "framer-motion";

const CarouselItem = ({ URL }) => {
  return (
    <li className="w-full relative">
      <img
        src={URL}
        alt=""
        className="m-auto max-h-full w-full max-w-full object-cover object-center"
      />
      <div className="absolute inset-0 flex items-center p-28">
        <m.h1
          className="text-white text-7xl font-bold  w-1/2 leading-tight"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{delay: 0.3}}
        >
          "Breathe Fresh: Transform Your Space Instantly"
        </m.h1>
      </div>
    </li>
  );
};

export default CarouselItem;
