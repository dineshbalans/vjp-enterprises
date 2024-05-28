import React, { useState } from "react";
import JsonDisplay from "../General/UI/JsonDisplay";
import {
  LuChevronLeftCircle,
  LuChevronRightCircle,
  LuHeart,
} from "react-icons/lu";
import productDetailSpecs from "../../assets/productDetailSpecs.png";
import Breadcrumbs from "../General/UI/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { wishListActions } from "../../store/wishListSlice";
import { useMutation } from "react-query";
import { axiosInstance } from "../../services/axios";
import { userActions } from "../../store/userSlice";

const ProductDetails = ({
  product,
  showAllImage = true,
  showBreadCrumbs = true,
}) => {
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);
  const [productImageIndex, setProductImageIndex] = useState(0);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const wishListItems = useSelector((state) => state.wishlist.items);

  const itemExistsInWishList = wishListItems.find(
    (item) => item._id === product._id
  );
  console.log(product);

  const addToCartHandler = () => {
    const price = product?.actualPrice;
    // const price = product?.discountPrice;
    // .replace(/,/g, "").slice(1);
    // console.log({...product,productQuantity});
    // const cartData = {
    //   _id: product?._id,
    //   itemTitle: product?.itemTitle,
    //   images: product?.images,
    //   price,
    //   productQuantity,
    //   category: product?.subCategory,
    // };
    dispatch(cartActions.addProduct({ ...product, productQuantity }));
    // console.log(cartData);
  };

  const { mutate: processWishList } = useMutation(
    (id) => axiosInstance.put(`/user/wishlist/${id}`),
    {
      onSuccess: (res) => {
        console.log(res);
        dispatch(
          itemExistsInWishList
          // userActions.removeFromWishList(product?._id)
          // userActions.addToWishList(product)

            ? wishListActions.removeFromWishList(product?._id)
            : wishListActions.addToWishList(product)
        );
      },
      onError: (err) => console.log(err),
    }
  );
  return (
    <>
      {showBreadCrumbs && (
        <Breadcrumbs
          currentPage={[
            {
              text: product?.subCategory
                ?.split("/")[0]
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
              URL: "..",
            },
            { text: product?.itemTitle, URL: "" },
          ]}
        />
      )}
      <section className="p-5 md:p-10 space-y-12">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-5">
          <div className="w-full lg:w-1/2 flex flex-wrap-reverse mdl:flex-nowrap  relative gap-3">
            <ul
              className={`flex flex-row mdl:flex-col gap-2 pb-4 h-full justify-center w-full mdl:w-fit items-end py-2 ${
                !showAllImage && "hidden"
              }`}
            >
              {product?.images?.map((image, index) => (
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
            {product?.images ? (
              <div className="relative">
                <img
                  src={product?.images[productImageIndex]}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className=" absolute inset-0 flex items-center justify-between px-5 group/productImg ">
                  <LuChevronLeftCircle
                    className="cursor-pointer text-ternary opacity-0 group-hover/productImg:opacity-100 transition-all ease-linear duration-300"
                    size={38}
                    onClick={() =>
                      setProductImageIndex((prevState) =>
                        prevState === 0
                          ? product?.images.length - 1
                          : prevState - 1
                      )
                    }
                  />
                  <LuChevronRightCircle
                    className="cursor-pointer text-ternary opacity-0 group-hover/productImg:opacity-100 transition-all ease-linear duration-300"
                    size={38}
                    onClick={() =>
                      setProductImageIndex((prevState) =>
                        prevState === product?.images.length - 1
                          ? 0
                          : prevState + 1
                      )
                    }
                  />
                </div>
                {!showAllImage && (
                  <ul className="flex gap-2 justify-center items-center pt-5">
                    {Array.from(Array(product?.images.length).keys()).map(
                      (i) => (
                        <li
                          key={i}
                          className={`h-2 w-2 rounded-full border border-black ${
                            productImageIndex === i
                              ? "bg-black"
                              : "bg-transparent"
                          }`}
                        />
                      )
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <h1 className=" w-1/2 flex justify-center items-center">
                <div className="border-t-2 border-primary w-40 h-40 rounded-full animate-spin" />
              </h1>
            )}
          </div>

          <div className="w-full lg:w-[47%] space-y-5 text-ternary">
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

            <button
              type="button"
              className="text-gray-500 hover:text-primary transition-all ease-linear
             flex gap-1 items-center w-fit"
              onClick={() => processWishList(product._id)}
            >
              <LuHeart
                className={`${
                  isAuthenticated &&
                  itemExistsInWishList &&
                  "text-pink-500 fill-pink-500"
                }`}
                // fill={`${itemExistsInWishList ? "pink" : "white"}`}
              />
              <span className="text-[15px]">{`${
                itemExistsInWishList
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"
              }`}</span>
            </button>

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
              <span className="capitalize text-primary">
                {product?.subCategory?.split("/")[0]}
              </span>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
