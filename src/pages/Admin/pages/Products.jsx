import React from "react";
import AdminProductItem from "../components/AdminProductItem";

const Products = () => {
  return (
    <div className="text-ternary space-y-4">
      <h1 className="text-3xl font-medium ">Products</h1>
      <div className="bg-white border rounded">
        <ul className="p-2 flex flex-wrap gap-[13px]">
          {[0, 0, 0, 0, 0, 0].map((item, index) => (
            <AdminProductItem key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
