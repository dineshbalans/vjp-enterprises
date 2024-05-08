import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminForm from "../Admin/components/AdminForm";
import AsideBar from "../Admin/components/AsideBar";
import { Outlet } from "react-router-dom";
import { adminActions } from "../../store/adminSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const isAdminAuthenticated = useSelector(
    (state) => state.admin.isAuthenticated
  );
  return (
    <div>
      {isAdminAuthenticated ? (
        <div className="border flex">
          <AsideBar isOpen={isAsideOpen} setIsOpen={setIsAsideOpen} />
          <div
            className={` bg-[#F8F9FA] ${isAsideOpen ? "w-[81%]" : "w-[95%]"}`}
          >
            <div className="bg-white border-b p-4 flex">
              <button
                className="bg-black text-white px-5 py-2 ml-auto"
                onClick={() => dispatch(adminActions.logOutAdmin())}
              >
                Logout
              </button>
            </div>
            <div className="p-8">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <AdminForm />
      )}
    </div>
  );
};

export default AdminLayout;
