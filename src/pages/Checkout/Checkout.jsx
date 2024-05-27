import React, { useState } from "react";
import checkOut from "../../assets/svg/checkOut.svg";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import CheckOutForm from "./components/CheckOutForm";
import OrderSummary from "./components/OrderSummary";
import { GiCheckMark } from "react-icons/gi";
import PaymentMethod from "./components/PaymentMethod";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { axiosInstance } from "../../services/axios";
import ProtectedRoute from "../../components/General/ProtectedRoute";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const [isShippingCmplted, setIsShippingCmplted] = useState(false);
  const [deliveryType, setDeliveryType] = useState({
    type: "VJP",
    additionalNotes: "",
  });

  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const { mutate: placeOrder } = useMutation(
    (orderInfo) => axiosInstance.post("order/create", orderInfo),
    {
      onSuccess: (res) => {
        console.log(res.data);
        navigate("/order-success");
        toast.success("You Order has been Placed :)");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const orderHandler = (paymentMethod) => {
    if (!paymentMethod.trim()) {
      toast.error("Please Select a payment method");
      return;
    }
    const orderInfo = {
      user: user._id,
      product: cart.map((item) => ({
        item: item._id,
        quantity: item.productQuantity,
        price: item.actualPrice,
      })),
      total: totalPrice,
      paymentMethod,
      deliveryType,
    };
    console.log(orderInfo);
    placeOrder(orderInfo);
  };
  console.log(deliveryType);
  return (
    <ProtectedRoute
      className="px-4 py-12  bg-white text-gray-500"
      URL="/account/sign-in"
    >
      <div className="2xl:container mx-auto">
        {/* CHECK OUT */}
        {cart.length === 0 ? (
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
        ) : (
          <div className="space-y-12 pt-5 ">
            <div
              className="flex flex-wrap-reverse items-center justify-between
          gap-10 lg:gap-0"
            >
              <div className="w-full lg:w-[63%] flex items-center ">
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
                  className="bg-ternary text-white font-medium px-10 py-3 rounded-full lg:ml-auto flex"
                >
                  <span className="text-center w-full">SIGN IN</span>
                </Link>
              )}
            </div>
            <div className="flex flex-wrap-reverse lg:flex-nowrap gap-8 min-h-[90vh]">
              {isShippingCmplted ? (
                <PaymentMethod
                  {...{ setIsShippingCmplted }}
                  orderHandler={orderHandler}
                />
              ) : (
                <CheckOutForm {...{ setIsShippingCmplted }} />
              )}
              <OrderSummary {...{ deliveryType, setDeliveryType }} />
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default CheckOutPage;
