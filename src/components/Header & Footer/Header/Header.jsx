import React, { useEffect, useState } from "react";
import logo from "../../../assets/vjp_logo_color.png";
import { LiaSearchSolid, LiaShoppingCartSolid } from "react-icons/lia";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { navBarData } from "./headerData";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/userSlice";

const Header = () => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  const userMenuHandler = (to) => {
    setIsUserMenuVisible((prevState) => !prevState);
    to && navigate(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setHeaderVisible(currentPosition < scrollPosition);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: headerVisible ? 1 : 0,
          y: headerVisible ? 0 : -100,
        }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="sticky top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="flex justify-between items-center px-6 py-4 border font-light relative">
          <img src={logo} alt="" className="object-contain w-48" />
          <ul className="hidden md:flex gap-8 ">
            {navBarData.map(({ id, path, title }) => (
              <li key={id}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6">
            <LiaSearchSolid className="scale-[1.5] cursor-pointer" />

            <div className="relative">
              <div
                onClick={() =>
                  isAuthenticated
                    ? userMenuHandler()
                    : navigate("/account/sign-in")
                }
                className="flex gap-1 items-center"
              >
                <LuUser2 className="scale-[1.5] cursor-pointer" />
                {isAuthenticated &&
                  (!isUserMenuVisible ? <BiChevronDown /> : <BiChevronUp />)}
              </div>
              {isUserMenuVisible && (
                <ul
                  className="absolute border mt-3 w-44 bg-white right-0 p-4 text-[15px] space-y-3
              text-gray-500 font-medium"
                >
                  <li
                    onClick={() => userMenuHandler("/customer/account")}
                    className="cursor-pointer"
                  >
                    My Account
                  </li>
                  <li
                    onClick={() => userMenuHandler("/customer/wish-list")}
                    className="cursor-pointer"
                  >
                    My WishList
                  </li>
                  <li
                    onClick={() => {
                      userMenuHandler();
                      dispatch(userActions.logOutUser());
                      
                    }}
                    className="cursor-pointer"
                  >
                    Sign Out
                  </li>
                </ul>
              )}
            </div>

            <div>
              <FiHeart className="scale-[1.5] cursor-pointer" />
            </div>
            <Link to="/cart">
              <LiaShoppingCartSolid className="scale-[1.7] cursor-pointer" />
            </Link>
          </div>
        </div>
      </motion.header>
      {/* <motion.header
        initial={{ y: 0 }}
        animate={{ y: headerVisible ? "-100%" : 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="flex justify-between items-center px-6 py-2 border font-light">
          <img src={logo} alt="" className="object-contain w-48" />
          <ul className="hidden md:flex gap-8 ">
            {navBarData.map(({ id, path, title }) => (
              <li key={id}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6">
            <LiaSearchSolid className="scale-[1.5] cursor-pointer" />
            <LuUser2 className="scale-[1.5] cursor-pointer" />
            <div>
              <FiHeart className="scale-[1.5] cursor-pointer" />
            </div>
            <div>
              <LiaShoppingCartSolid className="scale-[1.7] cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.header> */}
    </>
  );
};

export default Header;
