import React from "react";
import { FaShoppingBag, FaList, FaUser } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="text-ternary space-y-4">
      <h1 className="text-3xl font-medium ">Dashboard</h1>
      <ul className="flex justify-between gap-4">
        {/* Orders */}
        <li className="flex items-center bg-white w-1/4 p-4 border gap-3">
          <div className="w-12 h-12 rounded-full bg-green-200 flex justify-center items-center">
            <BiSolidShoppingBags className="text-green-500 scale-125" />
          </div>
          <div className="text-[15px]">
            <h1 className="font-semibold">Total Orders</h1>
            <h6>130</h6>
          </div>
        </li>
        {/* Category */}
        <li className="flex items-center bg-white w-1/4 p-4 border gap-3">
          <div className="w-12 h-12 rounded-full bg-pink-200 flex justify-center items-center">
            <FaList className="text-pink-500 scale-125" />
          </div>
          <div className="text-[15px]">
            <h1 className="font-semibold">Total Categorys</h1>
            <h6>15</h6>
          </div>
        </li>
        {/* Product */}
        <li className="flex items-center bg-white w-1/4 p-4 border gap-3">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex justify-center items-center">
            <FaShoppingBag className="text-yellow-500 scale-125" />
          </div>
          <div className="text-[15px]">
            <h1 className="font-semibold">Total Products</h1>
            <h6>70</h6>
          </div>
        </li>
        {/* User */}
        <li className="flex items-center bg-white w-1/4 p-4 border gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-200 flex justify-center items-center">
            <FaUser className="text-blue-500 scale-125" />
          </div>
          <div className="text-[15px]">
            <h1 className="font-semibold">Total Users</h1>
            <h6>480</h6>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
