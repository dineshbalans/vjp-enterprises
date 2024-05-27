import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { cartActions } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="flex flex-wrap justify-between lg:items-center lg:border-b lg:py-5 gap-5 border p-2 lg:border-0 lg:p-0"
      key={product._id}
    >
      {/* ITEM */}
      <div
        className="flex justify-between lg:justify-start gap-5 items-center w-full lg:w-[38%] border-b pb-4
      lg:border-b-0 lg:pb-0"
      >
        <img
          src={product.images[0]}
          alt=""
          className="w-24 h-24 object-cover object-center"
        />
        <h6 className=" text-[15px] ">{product.itemTitle}</h6>
      </div>
      {/* PRICE */}
      <div className="w-full sml:w-[15%] flex sml:block justify-between">
        <h1 className="text-gray-500 font-semibold pb-3 lg:hidden">Price:</h1>
        <h1>{`₹ ${product.actualPrice}`}</h1>
      </div>
      {/* QTY */}
      <div className="w-full sml:w-[15%] text-ternary flex sml:block justify-between">
        <h1 className="text-gray-500 font-semibold pb-3 lg:hidden">Qty:</h1>
        <div className="border border-ternary rounded-full flex items-center font-semibold p-1 w-fit">
          <button
            className="px-3 disabled:cursor-not-allowed text-2xl"
            // disabled={product?.productQuantity < 2}
            onClick={() =>
              dispatch(cartActions.decreaseProductQuantity(product?._id))
            }
          >
            -
          </button>
          <input
            type="number"
            className="flex w-12 h-full outline-none pl-5 text-gray-500 text-[15px]"
            value={product?.productQuantity}
            onChange={(event) => {
              if (+event.target.value < 0) {
                return;
              }
              dispatch(
                cartActions.setProductQuantity({
                  _id: product?._id,
                  productQuantity: +event.target.value,
                })
              );
            }}
          />
          <button
            className="px-3 text-2xl"
            onClick={() =>
              dispatch(cartActions.increaseProductQuantity(product?._id))
            }
          >
            +
          </button>
        </div>
      </div>
      {/* SUBTOTAL */}
      <div className="w-full sml:w-[20%]">
        <h1 className="text-gray-500 font-semibold pb-3 lg:hidden">
          Sub Total:
        </h1>
        <div className="flex justify-between items-center pr-4">
          <h1>{`₹ ${product.actualPrice * product?.productQuantity}`}</h1>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => dispatch(cartActions.removeProduct(product._id))}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
