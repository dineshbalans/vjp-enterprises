import React, { useState } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PaymentMethod = ({ setIsShippingCmplted, orderHandler }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setdiscount] = useState({
    show: false,
    code: "",
  });

  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <div className="w-full lg:w-[63%] rounded-md p-5 md:p-8 bg-[#F5F5F5] h-fit">
      <h3 className="text-2xl font-medium text-ternary border-b pb-3 ">
        Payment Method
      </h3>
      <div className="">
        {/* UPI */}
        <div className="space-x-5 border-b py-5">
          <input
            type="radio"
            id="upi"
            name="upi"
            className="scale-125"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          <label htmlFor="upi" className="text-black cursor-pointer">
            UPI
          </label>
        </div>
        {/* COD */}
        <div className="space-x-5 border-b py-5">
          <input
            type="radio"
            id="cod"
            name="cod"
            className="scale-125"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          <label htmlFor="cod" className="text-black cursor-pointer">
            Cash On Delivery
          </label>
        </div>
      </div>
      {/* User Info (Address) */}
      {paymentMethod && (
        <div className="py-5">
          <h1 className="text-lg text-lblack font-medium pb-1">Deliver To:</h1>
          <p>{`${user?.fName} ${user?.lName}`}</p>
          <p>{user?.email}</p>
          <p>{`${user?.strtAddrss}, ${user?.city}`}</p>
          <p>{`${user?.state}, ${user?.cntry}`}</p>
          <p>{user?.zipCode}</p>
          <p>+91 {user?.phNum}</p>
        </div>
      )}
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
          <div className="space-x-3 pb-5">
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
      <div className="flex items-center justify-between">
        <button
          className="bg-ternary text-white font-medium w-1/4 py-2 rounded-full"
          onClick={() => {
            window.scrollTo(0, 0);
            setIsShippingCmplted(false);
          }}
        >
          BACK
        </button>
        <button
          className="bg-primary text-white font-medium w-1/4 py-[10px] rounded-full ml-auto"
          onClick={() => orderHandler(paymentMethod)}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
