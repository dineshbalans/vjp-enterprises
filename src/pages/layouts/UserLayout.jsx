import React from "react";
import Banner from "../../components/General/Banner";
import { NavLink, Outlet } from "react-router-dom";
import { userLayoutData } from "./layoutData";
import ProtectedRoute from "../../components/General/ProtectedRoute";

const UserLayout = () => {
  return (
    <ProtectedRoute URL="/account/sign-in">
      <Banner />
      <div className="flex px-5 py-14 justify-between items-start relative">
        <ul className="text-gray-500 border p-7 space-y-5 w-[20%] sticky top-10">
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
        <div className="w-[78%]">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default UserLayout;
