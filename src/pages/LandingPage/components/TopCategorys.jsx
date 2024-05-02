import React from "react";
import { Link } from "react-router-dom";

const TopCategorys = ({ data, style }) => {
  return (
    <ul className="flex justify-center items-center">
      {data.map(({ id, name, image, link }, index) => (
        <li
          className={`${style} group/child relative ${
            index === 0
              ? "pl-0 py-3 pr-3"
              : index === data.length - 1
              ? "pl-3 py-3 pr-0"
              : "p-5"
          }`}
          key={id}
        >
          <Link to={link}>
            <div className="overflow-hidden relative">
              <img
                src={image}
                alt=""
                className="group-hover/child:scale-[1.1] transition-all duration-300 ease-linear -z-50"
              />
              <div className="absolute inset-0  flex justify-center items-end py-6">
                <h1 className="bg-white px-3 py-2 text-[15px] font-semibold">
                  {name}
                </h1>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopCategorys;
