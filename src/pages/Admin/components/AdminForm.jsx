import React from "react";
import Input, { LabelText } from "../../../components/General/Input";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "../../../store/adminSlice";

const AdminForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminActions.loginAdmin());
  };
  return (
    <div className="border flex justify-center items-center h-[100vh] bg-gradient-to-tr from-primary/30 to-[#ADD4F1]">
      <form
        action=""
        className="border-4 w-[33%] p-12 space-y-6 bg-white rounded-2xl"
        onSubmit={submitHandler}
      >
        <h1 className="text-2xl font-semibold text-gray-500">Admin Login</h1>
        <div className="flex flex-col gap-2 text-[15px]">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="outline-none border rounded-md p-3 text-sm bg-[#F9FAFB]"
          />
        </div>
        <div className="flex flex-col gap-2 text-[15px]">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="outline-none border rounded-md p-3 text-sm bg-[#F9FAFB]"
          />
        </div>
        <button
          className="bg-[#818CF8] text-white w-full p-2 rounded-lg
        hover:bg-[#727ff0] transition-all ease-linear"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
