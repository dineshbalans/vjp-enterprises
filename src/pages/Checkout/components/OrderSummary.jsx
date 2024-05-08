import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const [deliveryType, setDeliveryType] = useState("VJP");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="w-full lg:w-[34%] lg:sticky top-0 h-fit p-5 bg-[#F5F5F5] rounded-md">
      <div className="hidden lg:block">
        <h3 className="text-2xl font-medium text-ternary  pb-6">
          Order Summary
        </h3>
        <div className="border rounded-md">
          <div className="p-4 flex justify-between border-b">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          {cart.map(({ id, title, price, image, productQuantity }) => (
            <div
              key={id}
              className="flex justify-between p-4 items-center border-b"
            >
              <img src={image ? image[0] : ""} alt="" className="w-1/6" />
              <h3 className="text-xs w-1/2">{title}</h3>
              <h3 className="text-sm">{`x ${productQuantity}`}</h3>
              <h2 className="text-sm">{`₹${productQuantity * price}.00`}</h2>
            </div>
          ))}
          <div className="p-4 flex justify-between border-b">
            <h4>Subtotal</h4>
            <h4>{`₹${totalPrice}.00`}</h4>
          </div>
          <div className="p-4 flex justify-between text-ternary font-semibold text-lg">
            <h4>Total</h4>
            <h4>{`₹${totalPrice}.00`}</h4>
          </div>
        </div>
      </div>
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
              checked={deliveryType === "VJP"}
              onClick={() => setDeliveryType("VJP")}
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
              checked={deliveryType === "Self"}
              onClick={() => setDeliveryType("Self")}
            />
            <label htmlFor="Self" className="cursor-pointer">
              Self
            </label>
          </div>
        </div>

        {deliveryType === "Self" && (
          <textarea
            name="additional notes"
            id="additional notes"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="w-full h-24 outline-none border p-2 rounded mt-3"
            placeholder="Additional Notes (Optional)"
          />
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
