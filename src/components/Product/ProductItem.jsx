import React, { useState } from "react";
import productImg from "../../assets/product1.jpg";
import { LuEye, LuHeart, LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { wishListActions } from "../../store/wishListSlice";
import { uiActions } from "../../store/uiSlice";
import Modal from "../General/UI/Modal";
import { createPortal } from "react-dom";
import ProductDetails from "./ProductDetails";
import { AiOutlineClose } from "react-icons/ai";
import { userActions } from "../../store/userSlice";

const ProductItem = ({
  cardSize,
  category,
  // itemId,
  // itemTitle = "Product Name",
  // itemImage,
  // isSale,
  // actualPrice = 1000,
  // discountPrice,
  // discountPercentage,
  product,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const productDetailModal = useSelector(
    (state) => state.ui.modal.productDetailModal
  );

  const exitsInWishList = wishlistItems.find(
    (item) => item.itemId === product?.itemId
  );

  return (
    <li className="w-[23%] mb-6 ">
      {createPortal(
        <ModelSignup product={product} />,
        document.getElementById("modal")
      )}
      {createPortal(
        <ProductDetailModal product={product?.itemTitle} />,
        document.getElementById("modal")
      )}
      <div className="relative cursor-pointer group/card mb-2">
        <img
          src={product?.itemImage ? product?.itemImage[0] : productImg}
          alt=""
          loading="lazy"
          className=" object-cover object-center h-64 w-full"
        />
        <div
          className="opacity-0 group-hover/card:opacity-100 absolute inset-0 bg-black/10 
                    flex p-4 justify-center items-center transition-all ease-linear duration-[400ms]"
        >
          <div className="flex gap-2 h-fit">
            <button
              className="group/eye bg-white hover:bg-black p-[15px] rounded-full transition-all ease-linear"
              onClick={() =>
                dispatch(uiActions.productDetailModalHandler(product))
              }
            >
              <LuEye className="scale-[1.3] group-hover/eye:text-white" />
            </button>
            <button
              className="group/cart bg-white hover:bg-black p-[15px] rounded-full transition-all ease-linear"
              onClick={() =>
                product &&
                dispatch(
                  cartActions.addProduct({ ...product, productQuantity: 1 })
                )
              }
            >
              <LuShoppingCart className="scale-[1.3] group-hover/cart:text-white" />
            </button>
          </div>
          <button
            className="absolute top-4 left-4"
            onClick={() =>
              isAuthenticated
                ? dispatch(
                    exitsInWishList
                      ? wishListActions.removeFromWishList(product?.itemId)
                      : wishListActions.addToWishList({
                          ...product,
                          productQuantity: 1,
                        })
                  )
                : dispatch(uiActions.wishListSignInModalHandler())
            }
          >
            <LuHeart
              className={`scale-115 hover:text-pink-600 transition-all ease-linear ${
                isAuthenticated &&
                exitsInWishList &&
                "text-pink-500 fill-pink-500"
              }`}
              fill={exitsInWishList ? "pink" : "transparent"}
            />
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <Link
          // to={"/products/" + itemTitle}
          to={`/products/${category}/${product?.itemId}`}
          // to={`${itemId}`}
          className="text-[15px] font-medium text-ternary hover:text-pink-500
                  transition-all ease-linear cursor-pointer"
        >
          {product?.itemTitle}
        </Link>
        <p className="text-[13px] font-medium">
          ₹ {`${product?.actualPrice}.00`}
        </p>
      </div>
    </li>
  );
};

export default ProductItem;

const ModelSignup = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const wishListSignInModal = useSelector(
    (state) => state.ui.modal.wishListSignInModal
  );

  const submitHandler = (e) => {
    console.log(product);
    e.preventDefault();
    console.log({ email, password });
    dispatch(userActions.loginUser());
    dispatch(uiActions.wishListSignInModalHandler());
    // dispatch(
    //   wishListActions.addToWishList({
    //     ...product,
    //     productQuantity: 1,
    //   })
    // );
    // navigate("/customer/wish-list");
    navigate("/");
  };

  return (
    <>
      {wishListSignInModal && (
        <Modal isOpen={wishListSignInModal}>
          <div className="flex gap-2 w-full justify-center items-start z-[100]">
            <div className="bg-white border w-[30%]">
              <h1 className="text-lg font-medium p-3 border-b">SIGN IN</h1>
              <div className="p-7">
                <form
                  action=""
                  className="flex flex-col gap-10"
                  onSubmit={submitHandler}
                >
                  <div className="space-y-5">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border outline-none p-2 text-sm focus:border-black w-full"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border outline-none p-2 text-sm focus:border-black w-full"
                      placeholder="Password"
                    />
                    <div className="text-sm text-gray-500 text-right">
                      Forget Your password?
                    </div>
                  </div>
                  <div className="space-y-4">
                    <button className="text-white bg-primary text-sm font-medium w-full p-[10px]">
                      Sign In
                    </button>
                    <button
                      className="text-white bg-ternary text-sm font-medium w-full p-[10px]"
                      onClick={() => navigate("/account/sign-up")}
                    >
                      Create an Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="bg-ternary h-fit p-3 cursor-pointer group/close"
              onClick={() => dispatch(uiActions.wishListSignInModalHandler())}
            >
              <AiOutlineClose
                className="text-white scale-150 group-hover/close:rotate-180
              duration-300 transition-all ease-linear"
              />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

const ProductDetailModal = () => {
  const dispatch = useDispatch();
  const productDetailModal = useSelector(
    (state) => state.ui.modal.productDetailModal
  );
  const product = useSelector((state) => state.ui.modal.product);
  productDetailModal && console.log(product);
  return (
    <>
      {productDetailModal && (
        <Modal isOpen={productDetailModal} className="">
          <div className="bg-white overflow-y-scroll h-[90vh] xxl:h-auto w-[75%]">
            <AiOutlineClose
              className="ml-auto scale-150 mr-6 translate-y-5 cursor-pointer"
              onClick={() => dispatch(uiActions.productDetailModalHandler())}
            />
            <ProductDetails
              product={product && product}
              showBreadCrumbs={false}
              showAllImage={false}
            />
          </div>
        </Modal>
      )}
    </>
  );
};
