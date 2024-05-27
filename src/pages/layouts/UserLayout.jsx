import React, { useEffect } from "react";
import Banner from "../../components/General/Banner";
import { NavLink, Outlet } from "react-router-dom";
import { userLayoutData } from "./layoutData";
import ProtectedRoute from "../../components/General/ProtectedRoute";
import { useQuery } from "react-query";
import { axiosInstance } from "../../services/axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

const UserLayout = () => {
  const dispatch = useDispatch();
  // Try to Upgrade to useQuery
  // useEffect(() => {
  //   const checkIfUserIsLoggedInOrNot = async () => {
  //     try {
  //       const res = await axiosInstance.get("/user/profile/me");
  //       console.log(res.data);
  //       if (res.data.data) {
  //         dispatch(userActions.setUser(res.data.data));
  //       }
  //     } catch (error) {
  //       console.log("An error happened:", error);
  //     }
  //   };
  //   checkIfUserIsLoggedInOrNot();
  // }, []);

  return (
    <ProtectedRoute URL="/account/sign-in">
      <Banner />
      <div
        className="flex flex-wrap-reverse lg:flex-nowrap px-3 lg:px-5 py-14 justify-between items-start relative
      gap-5 lg:gap-0"
      >
        <ul className="text-gray-500 border p-7 space-y-5 w-full lg:w-[20%] sticky top-10">
          {userLayoutData.map(({ id, path, text }) => (
            <li key={id}>
              <NavLink
                to={`/customer${path}`}
                className={({ isActive }) =>
                  `text-[15px] hover:text-primary transition-all ease-linear duration-300
                  
                  ${isActive && "text-primary cursor-text font-medium"}`
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-full lg:w-[78%]">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default UserLayout;
