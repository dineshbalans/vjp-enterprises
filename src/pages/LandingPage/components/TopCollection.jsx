import React, { useEffect, useState } from "react";
import TopCategorys from "./TopCategorys";
import {
  topThreeCategory,
  topThreeCategoryData,
} from "../data/landingPageData";
import ProductItem from "../../../components/Product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

let selectedCategoryProducts;

const TopCollection = () => {
  const allProducts = useSelector((state) => state.product.products);
  const [topProdCategories, setTopProdCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  //   const [selectedCategoryProducts, setSelectedCategoryProducts] = useState("");

  selectedCategoryProducts = topProdCategories.find(
    (category) => category.category === selectedCategory
  );

  console.log(selectedCategoryProducts?.items);

  console.log(topProdCategories.slice(0, 3));

  useEffect(() => {
    allProducts && console.log(allProducts);
    const withoutAllProductCategory = allProducts.filter(
      (product) => product.category !== "all-products"
    );

    allProducts && console.log(withoutAllProductCategory);

    withoutAllProductCategory.forEach((category, index) => {
      index === 0 && setSelectedCategory(category.category);
      setTopProdCategories((prevState) => [
        ...prevState,
        {
          id: category.id,
          name: category.title,
          category: category.category,
          items: category.items,
        },
      ]);
    });
  }, [allProducts]);

  return (
    <>
      <TopCategorys data={topThreeCategory} />
      {/* Shop The Collection */}
      <div>
        <div className="space-y-10">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-semibold">
              Shop The Collection
            </h1>
            <hr className="border w-[13%] border-black mx-auto" />
          </div>

          {/* Categories */}
          <ul className="flex justify-center gap-4 text-[15px]">
            {topProdCategories.slice(0, 3).map(({ id, name, category }) => (
              <li
                key={id}
                className={`border border-dashed rounded-full px-6 py-[6px] cursor-pointer ${
                  selectedCategory === category
                    ? "border-black"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {name}
              </li>
            ))}
          </ul>

          {/* Products */}
          <ul className="flex flex-wrap justify-between">
            {selectedCategoryProducts?.items
              .slice(
                0,
                selectedCategoryProducts?.items.length > 8
                  ? 8
                  : selectedCategoryProducts?.items.length
              )
              .map((product) => (
                <ProductItem
                  key={product.itemId}
                  category={selectedCategory}
                  product={product}
                />
              ))}
          </ul>

          {/* See More Button */}
          <div className="flex justify-center -translate-y-5">
            <Link
              to={`/products/${selectedCategory}`}
              className="border px-8 py-3 bg-ternary text-white rounded-full
              hover:bg-primary transition-all ease-linear duration-[400ms]"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCollection;
