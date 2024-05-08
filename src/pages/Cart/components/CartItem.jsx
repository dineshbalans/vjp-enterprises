import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { cartActions } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="flex justify-between items-center border-b py-5"
      key={product.itemId}
    >
      {/* ITEM */}
      <div className="flex gap-5 items-center w-[38%]">
        <img
          src={product.itemImage[0]}
          alt=""
          className="w-24 h-24 object-cover object-center"
        />
        <h6 className=" text-[15px] ">{product.itemTitle}</h6>
      </div>
      {/* PRICE */}
      <p className="w-[15%]">{`₹ ${product.actualPrice}`}</p>
      {/* QTY */}
      <div className="w-[15%] text-ternary">
        <div className="border border-ternary rounded-full flex items-center font-semibold p-1 w-fit">
          <button
            className="px-3 disabled:cursor-not-allowed text-2xl"
            // disabled={product?.productQuantity < 2}
            onClick={() =>
              dispatch(cartActions.decreaseProductQuantity(product?.itemId))
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
                  itemId: product?.itemId,
                  productQuantity: +event.target.value,
                })
              );
            }}
          />
          <button
            className="px-3 text-2xl"
            onClick={() =>
              dispatch(cartActions.increaseProductQuantity(product?.itemId))
            }
          >
            +
          </button>
        </div>
      </div>
      {/* SUBTOTAL */}
      <div className="w-[20%] flex justify-between items-center pr-4">
        <h1>{`₹ ${product.actualPrice * product?.productQuantity}`}</h1>
        <AiOutlineClose
          className="cursor-pointer"
          onClick={() => dispatch(cartActions.removeProduct(product.itemId))}
        />
      </div>
    </li>
  );
};

export default CartItem;
