import React from "react";
import productImg from "../../assets/product1.jpg";
import { LuEye, LuHeart, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductItem = ({
  cardSize,
  category,
  itemId,
  itemTitle = "Product Name",
  itemImage,
  isSale,
  actualPrice = 1000,
  discountPrice,
  discountPercentage,
}) => {
  return (
    <li className="w-[23%] mb-6 ">
      <div className="relative cursor-pointer group/card mb-2">
        <img
          src={itemImage ? itemImage[0] : productImg}
          alt=""
          loading="lazy"
          className=" object-cover object-center h-64 w-full"
        />
        <div
          className="opacity-0 group-hover/card:opacity-100 absolute inset-0 bg-black/10 
                    flex p-4 justify-center items-center transition-all ease-linear duration-[400ms]"
        >
          <div className="flex gap-2 h-fit">
            <div className="group/eye bg-white hover:bg-black p-[15px] rounded-full transition-all ease-linear">
              <LuEye className="scale-[1.3] group-hover/eye:text-white" />
            </div>
            <div className="group/cart bg-white hover:bg-black p-[15px] rounded-full transition-all ease-linear">
              <LuShoppingCart className="scale-[1.3] group-hover/cart:text-white" />
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <LuHeart className="scale-115 hover:text-pink-600 transition-all ease-linear" />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <Link
          // to={"/products/" + itemTitle}
          to={`/products/${category}/${itemId}`}
          // to={`${itemId}`}
          className="text-[15px] font-medium text-ternary hover:text-pink-500
                  transition-all ease-linear cursor-pointer"
        >
          {itemTitle}
        </Link>
        <p className="text-[13px] font-medium">₹ {`${actualPrice}.00`}</p>
      </div>
    </li>
  );
};

export default ProductItem;
