import React, { useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router-dom";
import Header from "../../components/Header & Footer/Header/Header";
import Footer from "../../components/Header & Footer/Footer/Footer";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/productSlice";

const RootLayout = () => {
  const dispatch = useDispatch();
  const allProducts = useRouteLoaderData("products");

  useEffect(() => {
    allProducts && dispatch(productActions.addProducts(allProducts));
  }, [allProducts]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />

      <Header />
      <div className="xxl:container xxl:mx-auto flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
