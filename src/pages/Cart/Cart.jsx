import React, { useState } from "react";
import Banner from "../../components/General/Banner";
import product from "../../assets/product1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import CountryStateSelect from "../../components/General/CountryStateSelect";

const Cart = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <section>
      <Banner text="Shopping Cart" />
      <div className="px-4 py-16">
        {/* CART */}
        <div>
          {/* CART TITLE */}
          <ul className="flex text-[15px] font-semibold justify-between items-center border-b pb-3">
            <li className="w-[38%]">ITEM</li>
            <li className="w-[15%]">PRICE</li>
            <li className="w-[15%]">QTY</li>
            <li className="w-[20%]">SUBTOTAL</li>
          </ul>
          {/* CART ITEMS */}
          <ul className="text-gray-500 text-[15px]">
            <li className="flex justify-between items-center border-b py-5">
              {/* ITEM */}
              <div className="flex gap-5 items-center w-[38%]">
                <img
                  src={product}
                  alt=""
                  className="w-24 h-24 object-cover object-center"
                />
                <h6 className=" text-[15px] ">Product Name</h6>
              </div>
              {/* PRICE */}
              <p className="w-[15%]">₦1000</p>
              {/* QTY */}
              <div className="w-[15%] text-ternary">
                <div className="border border-ternary rounded-full flex items-center font-semibold p-1 w-fit">
                  <button
                    className="px-3 disabled:cursor-not-allowed text-2xl"
                    disabled={productQuantity < 2}
                    onClick={() =>
                      setProductQuantity((prevState) => prevState - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="flex w-12 h-full outline-none pl-5 text-gray-500 text-[15px]"
                    value={productQuantity}
                    onChange={(event) => {
                      if (+event.target.value < 1) {
                        return;
                      }
                      setProductQuantity(+event.target.value);
                    }}
                  />
                  <button
                    className="px-3 text-2xl"
                    onClick={() =>
                      setProductQuantity((prevState) => prevState + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              {/* SUBTOTAL */}
              <div className="w-[20%] flex justify-between items-center pr-4">
                <h1>₦1000</h1>
                <AiOutlineClose className="cursor-pointer" />
              </div>
            </li>
          </ul>
          <div className="flex justify-between items-center py-8">
            <Link to="/" className="txt">
              Continue Shopping
            </Link>
            <Link to="/" className="txt">
              Clear Shopping Cart
            </Link>
          </div>
        </div>
        {/* <CountryStateSelect /> */}
        <div className="flex justify-between">
          <div className="space-y-2">
            <label htmlFor="discountCode" className="text-sm">
              Enter Discount Code
            </label>
            <div className="flex border rounded-full text-sm gap-16 p-[2px] w-fit">
              <input
                id="discountCode"
                type="text"
                className="outline-none rounded-l-full px-2 text-sm bg-transparent"
                placeholder="Enter Discount Code"
              />
              <button className="primeBttn">Apply Discount</button>
            </div>
          </div>
          <div className="w-[35%] space-y-5">
            <div className="flex justify-between text-gray-500 text-sm">
              <h1>Sub Total</h1>
              <h3>$185.00</h3>
            </div>
            <div className="flex justify-between text-gray-500 text-sm">
              <h1>Tax</h1>
              <h3>$0.00</h3>
            </div>
            <div className="flex justify-between text-ternary text-lg font-semibold">
              <h1>ORDER TOTAL</h1>
              <h3>$185.00</h3>
            </div>
            <div className="flex justify-end">
              <Link className="primeBttnWhOut" to="/checkout">Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
