import React, { useState } from "react";
import JsonDisplay from "../General/UI/JsonDisplay";
import {
  LuChevronLeftCircle,
  LuChevronRightCircle,
  LuHeart,
} from "react-icons/lu";
import productDetailSpecs from "../../assets/productDetailSpecs.png";
import Breadcrumbs from "../General/UI/Breadcrumbs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductDetails = ({
  product,
  productCategory,
  showAllImage = true,
  showBreadCrumbs = true,
}) => {
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);
  const [productImageIndex, setProductImageIndex] = useState(0);

  const addToCartHandler = () => {
    const price = product?.actualPrice;
    // const price = product?.discountPrice;
    // .replace(/,/g, "").slice(1);
    const cartData = {
      id: product?.itemId,
      title: product?.itemTitle,
      image: product?.itemImage,
      price,
      productQuantity,
      category: product?.subCategory,
    };
    dispatch(cartActions.addProduct(cartData));
    // console.log(cartData);
  };

  return (
    <>
      {showBreadCrumbs && (
        <Breadcrumbs
          currentPage={[
            { text: productCategory, URL: ".." },
            { text: product?.itemTitle, URL: "" },
          ]}
        />
      )}
      <section className="p-5 md:p-10  space-y-12 min-h-[80vh] ">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-5">
          {/* <div className="sml:hidden pt-6 pb-3">
            <span className="text-gray-500 text-sm">
              <Link to="/">Home</Link> / <Link to="..">{productCategory}</Link>{" "}
              / {product?.itemTitle}
            </span>
          </div> */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[500px] p-1 gap-3">
            <ul
              className={`flex flex-col gap-2 pb-4 h-full items-end py-2 ${
                !showAllImage && "hidden"
              }`}
            >
              {product?.itemImage?.map((image, index) => (
                <li
                  key={index}
                  onClick={() => setProductImageIndex(index)}
                  className={`w-20  h-20 relative cursor-pointer border rounded ${
                    productImageIndex !== index && "bg-black/30 border-0"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="object-cover h-full w-full object-center absolute -z-20"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
            {product?.itemImage ? (
              <div className="relative">
                <img
                  src={product?.itemImage[productImageIndex]}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className=" absolute inset-0 flex items-center justify-between px-5 group/productImg">
                  <LuChevronLeftCircle
                    className="cursor-pointer text-ternary opacity-0 group-hover/productImg:opacity-100 transition-all ease-linear duration-300"
                    size={38}
                    onClick={() =>
                      setProductImageIndex((prevState) =>
                        prevState === 0
                          ? product?.itemImage.length - 1
                          : prevState - 1
                      )
                    }
                  />
                  <LuChevronRightCircle
                    className="cursor-pointer text-ternary opacity-0 group-hover/productImg:opacity-100 transition-all ease-linear duration-300"
                    size={38}
                    onClick={() =>
                      setProductImageIndex((prevState) =>
                        prevState === product?.itemImage.length - 1
                          ? 0
                          : prevState + 1
                      )
                    }
                  />
                </div>
              </div>
            ) : (
              <h1 className=" w-1/2 flex justify-center items-center">
                <div className="border-t-2 border-primary w-40 h-40 rounded-full animate-spin" />
              </h1>
            )}
          </div>

          <div className="w-full lg:w-[47%] space-y-5 text-ternary">
            {/* <div className="hidden sml:block">
              <span className="text-gray-500 text-sm">
                <Link to="/">Home</Link> /{" "}
                <Link to="..">{productCategory}</Link> / {product?.itemTitle}
              </span>
            </div> */}
            <h1 className="text-gray-800 text-xl font-semibold text-justify sml:text-left">
              {product?.itemTitle}
            </h1>
            <h4 className=" text-gray-400 text-2xl ">
              {`₹${product?.actualPrice}`}
            </h4>
            <p className="text-justify md:text-left text-sm leading-6">{`${
              product?.itemDescription?.split(".")[0]
            }.`}</p>

            <div className="flex flex-wrap sml:flex-nowrap pb-4 gap-5 justify-center sml:justify-start">
              <div className="border border-ternary rounded-full flex font-semibold p-1">
                <button
                  className="px-4 disabled:cursor-not-allowed text-2xl"
                  disabled={productQuantity < 2}
                  onClick={() =>
                    setProductQuantity((prevState) => prevState - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  className="flex w-12 h-full outline-none pl-5 "
                  value={productQuantity}
                  onChange={(event) => {
                    if (+event.target.value < 1) {
                      return;
                    }
                    setProductQuantity(+event.target.value);
                  }}
                />
                <button
                  className="px-4 text-2xl"
                  onClick={() =>
                    setProductQuantity((prevState) => prevState + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="text-white w-full bg-primary font-semibold px-5 py-[6px] rounded-full"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>

            <h6
              className="text-gray-500 hover:text-primary transition-all ease-linear
             flex gap-1 items-center w-fit cursor-pointer"
            >
              <LuHeart />
              <span className="text-[15px]">Add to Wish List</span>
            </h6>

            <div>
              <img src={productDetailSpecs} alt="" />
            </div>

            {/* <h5></h5> */}
            {/* <div className="flex space-x-3 text-2xl items-baseline">
              <span>{`₹${product?.discountPrice}`}</span>
              <span className="line-through text-gray-400 text-lg ">
                {`₹${product?.actualPrice}`}
              </span>
            </div> */}

            <JsonDisplay data={product?.highlights} />

            <h4 className="text-center sml:text-left">
              Category:{" "}
              <span className="capitalize text-primary">{productCategory}</span>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;