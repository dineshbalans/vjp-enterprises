import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Pagination from "../General/Pagination";
import ProductItem from "./ProductItem";
import Breadcrumbs from "../General/UI/Breadcrumbs";
import { toCaptialCase } from "../../utils/helperFunction";
import Banner from "../General/Banner";
import { useSelector } from "react-redux";

const ProductList = ({ productInfo, category, subCategory }) => {
  const products = useSelector((state) => state.product.products);
  console.log(productInfo);
  console.log(products);

  const filteredProductsByCategory = subCategory
    ? productInfo?.items?.filter(
        (product) => product.subCategory === subCategory
      )
    : productInfo?.items;

  console.log(filteredProductsByCategory);

  const productLength = filteredProductsByCategory?.length;

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  console.log("currentPageNumber : " + currentPageNumber);
  const itemsPerpage = 8;
  const startIndex = (currentPageNumber - 1) * itemsPerpage;
  const endIndex = currentPageNumber * itemsPerpage;
  const totalpages = Math.ceil(productLength / itemsPerpage);

  useEffect(() => {
    setCurrentPageNumber(1);
  }, [category]);

  return (
    <>
      <Banner
        text={toCaptialCase(category)}
        desc={productInfo?.description}
        style="py-24"
      />
      <Breadcrumbs currentPage={[{ text: toCaptialCase(category) }]} />
      <section className="px-5 mdl:px-10  py-10 pt-10">
        {/* Product Title */}
        <h1 className="text-4xl sml:text-6xl text-primary font-semibold pb-10 hidden">
          {productInfo?.title}
        </h1>

        {/* Product Description */}
        <p className="leading-7 text-justify sml:text-left hidden">
          {productInfo?.description}
        </p>
        <div>
          <div className="flex justify-between py-6 text-gray-800">
            <h4>
              {productLength > 7
                ? `Showing ${
                    startIndex + 1
                  }–${endIndex} of ${productLength} results`
                : `Showing all ${productLength} results`}
            </h4>
            <h4 className="hidden sml:flex items-center gap-2">
              <span>Default Sorting</span>
              <BsChevronDown className="" />
            </h4>
          </div>
          <ul className="flex flex-wrap justify-center items-stretch gap-5">
            {filteredProductsByCategory
              ?.slice(startIndex, endIndex)
              ?.map((product) => (
                <ProductItem
                  key={product.itemId}
                  category={category}
                  {...product}
                />
              ))}
          </ul>
        </div>
        {productLength > 7 && (
          <Pagination
            totalpages={totalpages}
            itemsPerpage={itemsPerpage}
            currentPageNumber={currentPageNumber}
            setCurrentPageNumber={setCurrentPageNumber}
          />
        )}
      </section>
    </>
  );
};

export default ProductList;
