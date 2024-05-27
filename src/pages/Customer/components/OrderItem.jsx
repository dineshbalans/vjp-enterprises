import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { formatDateAndTime } from "../../../utils/helperFunction";

const OrderItem = ({ order }) => {
  const [orderSummary, setOrderSummary] = useState(true);

  return (
    <li className="border">
      <div className="border-b flex justify-between p-3 bg-[#F6F6F8]">
        <h1 className="bg-blue-500 text-white text-sm py-2 px-3">
          OD{order._id}
        </h1>
        <div className="flex justify-center items-center gap-6">
          <h1
            className={` px-5 py-1 border rounded-full text-sm  ${
              order.status === "Delivered"
                ? "bg-green-200 border-green-800 text-green-800"
                : order.status === "Cancelled"
                ? "bg-red-200 border-red-800 text-red-800"
                : "bg-yellow-200 border-yellow-800 text-yellow-800"
            }`}
          >
            {order.status}
          </h1>
          {orderSummary ? (
            <FaMinus
              onClick={() => setOrderSummary((prevState) => !prevState)}
              className="cursor-pointer"
            />
          ) : (
            <FaPlus
              onClick={() => setOrderSummary((prevState) => !prevState)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      {orderSummary && (
        <div className="p-3">
          <ul className="p-2 space-y-1 divide-y text-[15px]">
            <li className="flex pb-3  items-center justify-between">
              <div className="">Image</div>
              <h4 className="w-1/2  text-center">Name</h4>
              <h5 className="w-1/6  text-center">Price</h5>
              <h5 className="w-1/6  text-center">Quantity</h5>
              <h5 className="w-1/6  text-center">Sub Total</h5>
            </li>
            {order.product.map((product) => (
              <li
                key={product._id}
                className="flex gap-5 items-center justify-between"
              >
                <div className="">
                  <img
                    src={product.item.images[0]}
                    alt=""
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h4 className="w-1/2  text-center">{product.item.itemTitle}</h4>
                <h5 className="w-1/6  text-center">₹ {product.price}</h5>
                <h5 className="w-1/6  text-center">{product.quantity}</h5>
                <h5 className="w-1/6  text-center">
                  ₹ {product.price * product.quantity}
                </h5>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center border-t pt-2 text-sm">
            <div className="space-y-1">
              <p className="text-gray-400 ">
                Payment Method:
                <span className="text-lblack font-medium pl-1">
                  {order.paymentMethod.toUpperCase()}
                </span>
              </p>
              <p className="text-gray-400 ">
                Ordered On:
                <span className="text-lblack font-medium pl-1">
                  {formatDateAndTime(order.createdAt).formattedDate}
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-400 ">
                Delivery Type:
                <span className="text-lblack font-medium pl-1">
                  {order.deliveryType.type}
                </span>
              </p>
              <p className="text-gray-400 ">
                Order Total:
                <span className="text-lblack font-medium pl-1">
                  ₹ {order.total}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default OrderItem;
