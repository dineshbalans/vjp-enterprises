import React from "react";
import productImg from "../../../assets/product1.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
import { wishListActions } from "../../../store/wishListSlice";

const WishListItem = ({ product, category }) => {
  const dispatch = useDispatch();

  return (
    <li className="w-[24.5%] mb-6 space-y-3 p-2">
      <div className="">
        <div className="relative cursor-pointer group/card mb-2">
          <img
            src={product?.itemImage ? product?.itemImage[0] : productImg}
            alt=""
            loading="lazy"
            className=" object-cover object-center h-64 w-full"
          />
        </div>
        <div className="space-y-1">
          <Link
            // to={"/products/" + itemTitle}
            to={`/products/${category}/${product?.itemId}`}
            // to={`${itemId}`}
            className="text-[15px] font-medium text-ternary hover:text-pink-500
                transition-all ease-linear cursor-pointer"
          >
            {product?.itemTitle ? product?.itemTitle : "Product Name"}
          </Link>
          <p className="text-[13px] font-medium">
            ₹ {`${product?.actualPrice ? product?.actualPrice : 0}.00`}
          </p>
        </div>
      </div>
      <button
        className="text-white   bg-primary font-semibold px-5 py-[6px] rounded-full"
        onClick={() => dispatch(cartActions.addProduct(product))}
      >
        Add to cart
      </button>
      <h6
        className="txt cursor-pointer w-fit"
        onClick={() =>
          dispatch(wishListActions.removeFromWishList(product?.itemId))
        }
      >
        Remove Item
      </h6>
    </li>
  );
};

export default WishListItem;
