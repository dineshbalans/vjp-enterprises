import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.jsx";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FramerMotion from "./framer-motion/FramerMotion.jsx";
import RootLayout from "./pages/layouts/RootLayout.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import ProductDetailsPage from "./pages/product/ProductDetailsPage.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import SignIn from "./pages/SignUp&SignIn/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp&SignIn/SignUp/SignUp.jsx";
import ProductLayout from "./pages/layouts/ProductLayout.jsx";
import CategoryPage from "./pages/product/CategoryPage.jsx";
import { loader as getProductsLoader } from "./config/Firebase.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import NewArrivalPage from "./pages/NewArrivalPage.jsx";
import TodayDealsPage from "./pages/TodayDealsPage.jsx";
import Account from "./pages/Customer/Account.jsx";
import UserLayout from "./pages/layouts/UserLayout.jsx";
import Orders from "./pages/Customer/Orders.jsx";
import WishList from "./pages/Customer/WishList.jsx";
import AddressBook from "./pages/Customer/AddressBook.jsx";
import AccountInfo from "./pages/Customer/AccountInfo.jsx";
import AdminLayout from "./pages/layouts/AdminLayout.jsx";
import Dashboard from "./pages/Admin/pages/Dashboard.jsx";
import Products from "./pages/Admin/pages/Products.jsx";
import AddProduct from "./pages/Admin/pages/AddProduct.jsx";
import Categories from "./pages/Admin/pages/Categories.jsx";
import AdminOrders from "./pages/Admin/pages/Orders.jsx";
import Users from "./pages/Admin/pages/Users.jsx";
import EditProduct from "./pages/Admin/components/EditProduct.jsx";

const routes = createBrowserRouter([
  // User
  {
    path: "/",
    id: "products",
    loader: getProductsLoader,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "products",
        children: [
          {
            path: ":category",
            children: [
              {
                element: <ProductLayout />,
                children: [
                  {
                    index: true,
                    element: <CategoryPage />,
                  },
                ],
              },
              {
                path: ":productId",
                element: <ProductDetailsPage />,
              },
            ],
          },
        ],
      },
      {
        path: "account",
        children: [
          {
            // 	Access an existing account
            path: "sign-in",
            element: <SignIn />,
          },
          {
            // Create a new account
            path: "sign-up",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "customer",
        element: <UserLayout />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "wish-list",
            element: <WishList />,
          },
          {
            path: "address-book",
            element: <AddressBook />,
          },
          {
            path: "account-information",
            element: <AccountInfo />,
          },
        ],
      },
      {
        path: "new-arrivals",
        element: <NewArrivalPage />,
      },
      {
        path: "today-deals",
        element: <TodayDealsPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  // Admin
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productId",
            element: <EditProduct />,
          },
        ],
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "category",
        element: <Categories />,
      },
      {
        path: "orders",
        element: <AdminOrders />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <FramerMotion>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </FramerMotion>
  // </React.StrictMode>
);
