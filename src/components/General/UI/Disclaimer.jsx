import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

const Disclaimer = ({ className, text = "" }) => {
  return (
    <div
      className={`bg-[#FDF0D5] ${className} flex items-center  py-3 px-4 gap-3`}
    >
      <FaTriangleExclamation className="text-[#C07600]" />
      <p className="text-[#7C5C37] text-sm">{text}</p>
    </div>
  );
};

export default Disclaimer;
