import React from "react";
import AdminProductItem from "./components/AdminProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const adminProducts = useSelector((state) => state.admin.products);
  console.log(adminProducts);

  return (
    <div className="text-ternary space-y-4">
      <h1 className="text-3xl font-medium ">Products</h1>
      <div className="bg-white border rounded">
        <ul className="p-2 flex flex-wrap gap-[13px]">
          {adminProducts.map((product, index) => (
            <AdminProductItem key={index} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
