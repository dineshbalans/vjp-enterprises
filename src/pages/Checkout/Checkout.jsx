import React, { useState } from "react";
import checkOut from "../../assets/svg/checkOut.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import CheckOutForm from "./components/CheckOutForm";
import OrderSummary from "./components/OrderSummary";
import { GiCheckMark } from "react-icons/gi";
import PaymentMethod from "./components/PaymentMethod";

const CheckOutPage = () => {
  const [isShippingCmplted, setIsShippingCmplted] = useState(true);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <section className="px-4 py-12  bg-white text-gray-500">
      <div className="2xl:container mx-auto">
        {/* <h1 className="text-4xl font-semibold text-ternary my-8 lgl:my-0">
          Checkout
        </h1> */}
        {/*   ORDER SUMMARY */}
        {cart.length > 0 && (
          <div className="bg-[#F7FBFC] lg:hidden p-2 sml:p-4">
            <div className="flex justify-between border-y py-5 items-baseline">
              <button
                className="flex items-center gap-2"
                onClick={() => setShowOrderSummary((prevState) => !prevState)}
              >
                <span className="text-sm sml:text-base">
                  {`${showOrderSummary ? "Hide" : "Show"}  Order Summary`}
                </span>
                {showOrderSummary ? (
                  <FaChevronUp className="text-primary font-bold" />
                ) : (
                  <FaChevronDown className="text-primary font-bold" />
                )}
              </button>
              <h4 className="text-xs sml:text-base">{`₹${totalPrice}.00`}</h4>
            </div>
            {showOrderSummary && (
              <div>
                {cart.map(({ id, title, price, image, productQuantity }) => (
                  <div
                    className="flex border-b items-center justify-between p-2 gap-1"
                    key={id}
                  >
                    <img
                      src={image[0]}
                      alt=""
                      className="w-1/5 sml:w-1/12 object-cover"
                    />
                    <h1 className="w-1/2 text-xs sml:text-sm  text-primary">
                      {title}
                    </h1>
                    <h2 className="text-xs sml:text-base">
                      x {productQuantity}
                    </h2>
                    <h3 className="text-xs sml:text-base">{`₹${
                      productQuantity * price
                    }`}</h3>
                  </div>
                ))}
                <div>
                  <div className="flex justify-between border-b p-3 ">
                    <h5 className="w-1/2 text-ternary font-semibold text-sm sml:text-base">
                      Total Items:
                    </h5>
                    <h6 className="text-sm sml:text-base">{`${cart.length} item(s)`}</h6>
                  </div>
                  <div className="flex justify-between border-b p-3 ">
                    <h5 className="w-1/2 text-ternary font-semibold text-sm sml:text-base">
                      Subtotal:
                    </h5>
                    <h6 className="text-sm sml:text-base">{`₹${totalPrice}.00`}</h6>
                  </div>
                  <div className="flex justify-between border-b p-3 ">
                    <h5 className="w-1/2 text-ternary font-semibold text-sm sml:text-base">
                      Total:
                    </h5>
                    <h6 className="text-sm sml:text-base">{`₹${totalPrice}.00`}</h6>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {/* CHECK OUT */}
        {/* {!cart.length === 0 ? (
          <div className="w-full sml:w-1/2 mx-auto text-center mb-10">
            <img src={checkOut} alt="" className="w-[60%] mx-auto" />
            <h3 className="pb-10">
              Oops! It seems your cart is empty. Before you proceed with
              checkout, why not explore our fantastic selection of products and
              add some items to your cart? We've got something for everyone, so
              find what you love and complete your order with ease
            </h3>
            <Link to="/">
              <button
                className="bg-primary p-2 w-full sml:w-1/3 text-white hover:w-full
                hover:bg-ternary transition-all ease-linear text-lg border
                mx-auto"
              >
                Explore
              </button>
            </Link>
          </div>
        ) : ( */}
        <div className="space-y-12 pt-5">
          <div className="flex items-center justify-between">
            <div className="lg:w-[63%] flex items-center">
              <div
                className={`w-1/2 ${
                  !isShippingCmplted ? "text-black" : "text-[#B09C99]"
                }`}
              >
                <div className="relative">
                  <hr
                    className={`border-2  rounded-r-full ${
                      !isShippingCmplted && "border-black"
                    }`}
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div
                      className={`w-9 h-9 border-2 rounded-full 
                        flex justify-center items-center bg-white ${
                          !isShippingCmplted && "border-black"
                        }`}
                    >
                      <GiCheckMark className="scale-75" />
                    </div>
                  </div>
                </div>
                <h1 className="pt-6 text-center font-semibold text-sm">
                  SHIPPING
                </h1>
              </div>
              <div
                className={`w-1/2 ${
                  isShippingCmplted ? "text-black" : "text-[#B09C99]"
                }`}
              >
                <div className="relative">
                  <hr
                    className={`border-2  rounded-r-full ${
                      isShippingCmplted && "border-black"
                    }`}
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div
                      className={`w-9 h-9 border-2 rounded-full 
                        flex justify-center items-center bg-white ${
                          isShippingCmplted && "border-black"
                        }`}
                    >
                      {isShippingCmplted ? (
                        <GiCheckMark className="scale-75" />
                      ) : (
                        <h1>2</h1>
                      )}
                    </div>
                  </div>
                </div>
                <h1 className="pt-6 text-center font-semibold text-sm">
                  REVIEW & PAYMENTS
                </h1>
              </div>
            </div>
            {!isAuthenticated && (
              <Link
                to="/account/sign-in"
                className="bg-ternary text-white font-medium w-1/6 py-3 rounded-full ml-auto flex"
              >
                <span className="text-center w-full"> SIGN IN</span>
              </Link>
            )}
          </div>
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-8 min-h-[90vh]">
            {isShippingCmplted ? (
              <PaymentMethod {...{ setIsShippingCmplted }} />
            ) : (
              <CheckOutForm />
            )}
            <OrderSummary />
          </div>
        </div>
        {/* )} */}
      </div>
    </section>
  );
};

export default CheckOutPage;
