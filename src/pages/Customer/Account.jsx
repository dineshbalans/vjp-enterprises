import React from "react";

const Account = () => {
  return (
    <div className="space-y-7">
      <div className="border p-7 space-y-4 pb-11">
        <h1 className="text-2xl font-bold text-lblack">Account Information</h1>
        <div className="flex ">
          <div className="text-gray-500 text-[15px] space-y-1 w-1/2">
            <h1 className="text-lblack text-lg font-semibold mb-2">
              Contact Information
            </h1>
            <h5>dinesh balan</h5>
            <h5>dinesh@gmail.com</h5>
            <button className="txt">Edit</button>
          </div>
          <div className="text-gray-500 text-[15px] space-y-1 w-1/2">
            <h1 className="text-lblack text-lg font-semibold mb-2">
              Newsletters
            </h1>
            <p>You aren't subscribed to our newsletter.</p>
            <button className="txt">Edit</button>
          </div>
        </div>
      </div>
      <div className="border p-7 space-y-4 pb-11">
        <h1 className="text-2xl font-bold text-lblack">Address Book </h1>
        <div className="flex ">
          <div className="text-gray-500 text-[15px] space-y-1 w-1/2">
            <h1 className="text-lblack text-lg font-semibold mb-2">
              Default Billing Address
            </h1>
            <p>You have not set a default billing address.</p>
            <button className="txt">Edit Address</button>
          </div>
          <div className="text-gray-500 text-[15px] space-y-1 w-1/2">
            <h1 className="text-lblack text-lg font-semibold mb-2">
              Default Shipping Address
            </h1>
            <p>You have not set a default shipping address.</p>
            <button className="txt">Edit Address</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
