import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const OrderSummary = ({ deliveryType, setDeliveryType }) => {
  const [showOrderSummary, setShowOrderSummary] = useState(true);

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="w-full lg:w-[34%] lg:sticky top-0 h-fit p-5 bg-[#F5F5F5] rounded-md">
      <h3 className="text-2xl font-medium text-ternary  pb-6">Order Summary</h3>
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
          {cart.map(
            ({ _id, itemTitle, actualPrice, images, productQuantity }) => (
              <div
                className="flex border-b items-center justify-between p-2 gap-1"
                key={_id}
              >
                <img
                  src={images[0]}
                  alt=""
                  className="w-1/5 sml:w-1/12 object-cover"
                />
                <h1 className="w-1/2 text-xs sml:text-sm  text-primary">
                  {itemTitle}
                </h1>
                <h2 className="text-xs sml:text-base">x {productQuantity}</h2>
                <h3 className="text-xs sml:text-base">{`₹${
                  productQuantity * actualPrice
                }`}</h3>
              </div>
            )
          )}
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

      <div>
        <h3 className="inputTitle">Delivery Type</h3>
        <div className="flex gap-5">
          <div>
            <input
              type="radio"
              name="deliveryType"
              value="VJP"
              id="VJP"
              className="mr-2 cursor-pointer"
              checked={deliveryType.type === "VJP"}
              onClick={() =>
                setDeliveryType((prevState) => ({ ...prevState, type: "VJP" }))
              }
            />
            <label htmlFor="VJP" className="cursor-pointer">
              VJP
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="deliveryType"
              value="Self"
              id="Self"
              className="mr-2 cursor-pointer"
              checked={deliveryType.type === "Self"}
              onClick={() =>
                setDeliveryType((prevState) => ({ ...prevState, type: "Self" }))
              }
            />
            <label htmlFor="Self" className="cursor-pointer">
              Self
            </label>
          </div>
        </div>

        {deliveryType.type === "Self" && (
          <textarea
            name="additional notes"
            id="additional notes"
            value={deliveryType.additionalNotes}
            onChange={(e) =>
              setDeliveryType((prevState) => ({
                ...prevState,
                additionalNotes: e.target.value,
              }))
            }
            className="w-full h-24 outline-none border p-2 rounded mt-3"
            placeholder="Additional Notes (Optional)"
          />
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
