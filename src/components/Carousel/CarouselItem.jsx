import React from "react";

const CarouselItem = ({ URL }) => {
  return (
    <li className=" w-full">
      <img
        src={URL}
        alt=""
        className="m-auto max-h-full w-full max-w-full object-cover object-center"
      />
    </li>
  );
};

export default CarouselItem;
