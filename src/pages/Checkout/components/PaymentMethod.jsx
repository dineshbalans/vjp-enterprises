import React, { useState } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const PaymentMethod = ({ setIsShippingCmplted }) => {
  const [discount, setdiscount] = useState({
    show: false,
    code: "",
  });
  return (
    <div className="w-full lg:w-[63%] rounded-md sml:p-8 bg-[#F5F5F5] h-fit">
      <h3 className="text-2xl font-medium text-ternary border-b pb-3 ">
        Payment Method
      </h3>
      <div className="">
        <div className="space-x-5 border-b py-5">
          <input
            type="radio"
            id="mnyOrdr"
            name="mnyOrdr"
            className="scale-125"
          />
          <label htmlFor="mnyOrdr" className="text-black">
            Check / Money order
          </label>
        </div>
        <div className="space-x-5 border-b py-5">
          <input
            type="radio"
            id="bnkTrnsfrPmt"
            name="bnkTrnsfrPmt"
            className="scale-125"
          />
          <label htmlFor="bnkTrnsfrPmt" className="text-black">
            Bank Transfer Payment
          </label>
        </div>
        <div className="space-x-5 border-b py-5">
          <input type="radio" id="cod" name="cod" className="scale-125" />
          <label htmlFor="cod" className="text-black">
            Cash On Delivery
          </label>
        </div>
      </div>
      {/* DISCOUNT */}
      <div>
        <h6
          className="py-5 flex items-center gap-2 cursor-pointer w-fit"
          onClick={() =>
            setdiscount((prevState) => ({
              ...prevState,
              show: !prevState.show,
            }))
          }
        >
          <span className="text-sm text-primary">Apply Discount Code </span>
          {discount.show ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </h6>
        {discount.show && (
          <div className="space-x-3">
            <input
              type="text"
              name=""
              id=""
              value={discount.code}
              onChange={(e) =>
                setdiscount((prevState) => ({
                  ...prevState,
                  code: e.target.value,
                }))
              }
              className="outline-none border p-3 text-sm w-[40%]"
              placeholder="Enter Discount Code"
            />
            <button className="primeBttn">APPLY DISCOUNT</button>
          </div>
        )}
      </div>
      <button
        className="bg-ternary text-white font-medium w-[15%] py-2 rounded-full ml-auto"
        onClick={() => setIsShippingCmplted(false)}
      >
        BACK
      </button>
    </div>
  );
};

export default PaymentMethod;
