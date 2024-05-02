import React from "react";

import WishListItem from "./components/WishListItem";
import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {[0, 1, 2, 3, 4].map((i) => (
          <WishListItem key={i} />
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button className="secondaryBttn">Update Wish List</button>
        <button className="secondaryBttn">Clear Wish List</button>
        <button className="primaryBttn">Add All To Cart</button>
        <Link className="primaryBttn" to="/cart">
          Go To Cart
        </Link>
      </div>
    </div>
  );
};

export default WishList;
