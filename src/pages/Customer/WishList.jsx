import React from "react";

import WishListItem from "./components/WishListItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Disclaimer from "../../components/General/UI/Disclaimer";
import { wishListActions } from "../../store/wishListSlice";
import { cartActions } from "../../store/cartSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishListItems = useSelector((state) => state.wishlist.items);
  return (
    <>
      {wishListItems.length > 0 ? (
        <div>
          <ul className="flex flex-wrap">
            {wishListItems.map((product) => (
              <WishListItem key={product.itemId} product={product} />
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button className="secondaryBttn">Update Wish List</button>
            <button
              className="secondaryBttn"
              onClick={() => {
                dispatch(wishListActions.clearWishList());
                window.scrollTo(0, 0);
              }}
            >
              Clear Wish List
            </button>
            <button
              className="primaryBttn"
              onClick={() => {
                dispatch(cartActions.addAllProducts(wishListItems));
                navigate("/cart");
              }}
            >
              Add All To Cart
            </button>
            <Link className="primaryBttn" to="/cart">
              Go To Cart
            </Link>
          </div>
        </div>
      ) : (
        <Disclaimer text="You have no items in your wish list." />
      )}
    </>
  );
};

export default WishList;
