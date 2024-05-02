import React from "react";
import Input, { LabelText } from "../../components/General/Input";
import { CountrySelect, StateSelect } from "../Checkout/data/checkoutData";

const DefaultAddress = () => {
  return (
    <div className="border p-7 space-y-4 pb-11">
      <h1 className="text-2xl font-bold text-lblack">Default Addresses</h1>
      <div className="flex ">
        {/* Default Billing Address */}
        <div className="text-gray-500 text-[15px] space-y-1 w-1/2">
          <h1 className="text-lblack text-lg font-semibold mb-2">
            Default Billing Address
          </h1>
          <h5>dinesh balan</h5>
          <h5>Tirupur</h5>
          <h5>Tirupur, Tamilnadu, 641603</h5>
          <h5>India</h5>
          <button className="txt">Change Billing Address</button>
        </div>
        {/* Default Shipping Address */}
        <div className="text-gray-500 text-[15px] space-y-1 w-1/2">
          <h1 className="text-lblack text-lg font-semibold mb-2">
            Default Billing Address
          </h1>
          <h5>dinesh balan</h5>
          <h5>Tirupur</h5>
          <h5>Tirupur, Tamilnadu, 641603</h5>
          <h5>India</h5>
          <button className="txt">Change Shipping Address</button>
        </div>
      </div>
    </div>
  );
};

const UserInformationForm = () => {
  return (
    <form action="" className="border p-7 space-y-4 pb-11">
      {/* Contact Information */}
      <div className="space-y-5">
        <h1 className="text-xl  text-lblack pb-3">Contact Information</h1>
        {/* First Name */}
        <div>
          <LabelText
            text="First Name"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="fName"
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="fName" />
        </div>
        {/* Last Name */}
        <div>
          <LabelText
            text="Last Name"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="lName"
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="lName" />
        </div>
        {/* Company */}
        <div>
          <LabelText
            text="Company"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="cmpny"
            isMandatory={false}
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="cmpny" />
        </div>
        {/* Phone Number */}
        <div>
          <LabelText
            text="Phone Number"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="phNum"
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="phNum" />
        </div>
      </div>
      {/* Address */}
      <div className="space-y-5">
        <h1 className="text-xl  text-lblack pb-3">Address</h1>
        {/* Street Address */}
        <div>
          <LabelText
            text="Street Address"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="strtAddrss"
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="strtAddrss" />
        </div>
        {/* Country */}
        <div>
          <LabelText
            htmlFor="cntry"
            text="Country"
            className="text-gray-600 text-[15px] pb-1"
            // error={form.country.isError}
          />
          <CountrySelect
            id="cntry"
            className="text-gray-600 text-sm pb-2 pt-2"
            // dispatch={dispatch}
            // isError={form.country.isError}
            // value={form.country.value}
          />
        </div>
        {/* State */}
        <div>
          <LabelText
            htmlFor="state"
            text="State"
            className="text-gray-600 text-[15px] pb-1"
            // error={form.state.isError}
          />
          <StateSelect
            id="state"
            className="text-gray-600 text-sm pb-2 pt-2"
            // dispatch={dispatch}
            // isError={form.state.isError}
            // value={form.state.value}
          />
        </div>
        {/* City */}
        <div>
          <LabelText
            text="City"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="city"
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="city" />
        </div>
        {/* Zip/Postal Code */}
        <div>
          <LabelText
            text="Zip/Postal Code"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="zipCode"
          />
          <Input className="text-gray-600 text-sm pb-2 pt-2" id="zipCode" />
        </div>
      </div>
      <button className="primaryBttn">Save</button>
    </form>
  );
};

const AddressBook = () => {
  return (
    <div className="space-y-7">
      <DefaultAddress />
      <UserInformationForm />
    </div>
  );
};

export default AddressBook;
