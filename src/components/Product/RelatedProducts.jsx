import React from "react";
import ProductItem from "./ProductItem";
import { selectRandomElements } from "../../utils/helperFunction";

const RelatedProducts = ({ relatedProducts, category }) => {
  console.log(relatedProducts);
  return (
    <div className="px-5 space-y-6 py-12">
      <div className="flex gap-3 items-center justify-center">
        <hr className="border border-black w-16" />
        <h1 className="text-2xl font-medium">Related Products</h1>
        <hr className="border border-black w-16" />
      </div>
      <ul className="flex flex-wrap justify-between">
        {relatedProducts?.map((product) => (
          <ProductItem key={product.itemId} {...product} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;
