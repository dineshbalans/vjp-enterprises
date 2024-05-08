import React from "react";
import productImg from "../../../assets/product1.jpg";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AdminProductItem = ({ product, category }) => {
  const deleteHandler = (id) => {
    window.confirm("Are you sure you want delete this product?");
  };
  return (
    <li className="w-[24%] mb-6 border">
      <div className="relative cursor-pointer group/card mb-2">
        <img
          src={product?.itemImage ? product?.itemImage[0] : productImg}
          alt=""
          loading="lazy"
          className=" object-cover object-center h-64 w-full"
        />
      </div>
      <div className="">
        <Link
          to={`/admin/products/${product?.itemId}`}
          className="text-[15px] font-medium text-ternary hover:text-pink-500
                  transition-all ease-linear cursor-pointer"
        >
          {product?.itemTitle ? product?.itemTitle : "Product Name"}
        </Link>
        <p className="text-[13px] font-medium">
          ₹ {`${product?.actualPrice ? product?.actualPrice : 0}.00`}
        </p>
      </div>
      <div className="flex gap-2 mt-1">
        <Link
          to={`/admin/products/${product?.itemId}`}
          className="w-1/2 rounded bg-green-200 flex justify-center p-2
        hover:bg-green-300 transition-all ease-linear"
        >
          <FaEdit className="text-green-800 scale-125" />
        </Link>
        <button
          className="w-1/2 rounded bg-red-200 flex justify-center p-2
        hover:bg-red-300 transition-all ease-linear"
          onClick={deleteHandler}
        >
          <MdDelete className="text-red-500 scale-125" />
        </button>
      </div>
    </li>
  );
};

export default AdminProductItem;
