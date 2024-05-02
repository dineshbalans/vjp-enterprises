import React, { useReducer } from "react";
import { FaAmazonPay } from "react-icons/fa";
import { CountrySelect, StateSelect } from "../data/checkoutData";
import Input, { LabelText } from "../../../components/General/Input";

const initialValue = {
  isValid: { isError: "" },
  email: { value: "", isError: "" },
  firstName: { value: "", isError: "" },
  lastName: { value: "", isError: "" },
  company: { value: "", isError: "" },

  address: { value: "", isError: "" },
  country: { value: "", isError: "" },
  state: { value: "", isError: "" },
  // -> has included in reducerFn Start
  city: { value: "", isError: "" },
  zipCode: { value: "", isError: "" },
  phone: { value: "", isError: "" },
  // end
  additionalInfo: { value: "", isError: "" },
  shippingMethod: { value: "", isError: "" },
};

const reducer = (prevState, action) => {
  if (action.type === "formIsNotValid" || action.type === "formIsValid") {
    return {
      ...prevState,
      isValid: { ...prevState.isValid, isError: action.payload },
    };
  } else if (action.type === "emailVal" || action.type === "emailErr") {
    return action.type === "emailVal"
      ? {
          ...prevState,
          email: { ...prevState.email, value: action.payload },
        }
      : {
          ...prevState,
          email: { ...prevState.email, isError: action.payload },
        };
  } else if (action.type === "fnameVal" || action.type === "fnameErr") {
    return action.type === "fnameVal"
      ? {
          ...prevState,
          firstName: { ...prevState.firstName, value: action.payload },
        }
      : {
          ...prevState,
          firstName: { ...prevState.firstName, isError: action.payload },
        };
  } else if (action.type === "lnameVal" || action.type === "lnameErr") {
    return action.type === "lnameVal"
      ? {
          ...prevState,
          lastName: { ...prevState.lastName, value: action.payload },
        }
      : {
          ...prevState,
          lastName: { ...prevState.lastName, isError: action.payload },
        };
  }
  // Company : Not Mandatory
  else if (action.type === "cmpnyVal" || action.type === "cmpnyErr") {
    return action.type === "cmpnyVal"
      ? {
          ...prevState,
          company: { ...prevState.company, value: action.payload },
        }
      : {
          ...prevState,
          company: { ...prevState.company, isError: action.payload },
        };
  } else if (action.type === "addressVal" || action.type === "addressErr") {
    return action.type === "addressVal"
      ? {
          ...prevState,
          address: { ...prevState.address, value: action.payload },
        }
      : {
          ...prevState,
          address: { ...prevState.address, isError: action.payload },
        };
  } else if (action.type === "countryVal" || action.type === "countryErr") {
    return action.type === "countryVal"
      ? {
          ...prevState,
          country: { ...prevState.country, value: action.payload },
        }
      : {
          ...prevState,
          country: { ...prevState.country, isError: action.payload },
        };
  } else if (action.type === "stateVal" || action.type === "stateErr") {
    return action.type === "stateVal"
      ? {
          ...prevState,
          state: { ...prevState.state, value: action.payload },
        }
      : {
          ...prevState,
          state: { ...prevState.state, isError: action.payload },
        };
  } else if (action.type === "cityVal" || action.type === "cityErr") {
    return action.type === "cityVal"
      ? {
          ...prevState,
          city: { ...prevState.city, value: action.payload },
        }
      : {
          ...prevState,
          city: { ...prevState.city, isError: action.payload },
        };
  } else if (action.type === "zipCodeVal" || action.type === "zipCodeErr") {
    return action.type === "zipCodeVal"
      ? {
          ...prevState,
          zipCode: { ...prevState.zipCode, value: action.payload },
        }
      : {
          ...prevState,
          zipCode: { ...prevState.zipCode, isError: action.payload },
        };
  } else if (action.type === "phoneVal" || action.type === "phoneErr") {
    return action.type === "phoneVal"
      ? {
          ...prevState,
          phone: { ...prevState.phone, value: action.payload },
        }
      : {
          ...prevState,
          phone: { ...prevState.phone, isError: action.payload },
        };
  } else if (
    action.type === "additionalInfoVal" ||
    action.type === "additionalInfoErr"
  ) {
    return action.type === "additionalInfoVal"
      ? {
          ...prevState,
          additionalInfo: {
            ...prevState.additionalInfo,
            value: action.payload,
          },
        }
      : {
          ...prevState,
          additionalInfo: {
            ...prevState.additionalInfo,
            isError: action.payload,
          },
        };
  } else if (
    action.type === "shippingMethodVal" ||
    action.type === "shippingMethodErr"
  ) {
    return action.type === "shippingMethodVal"
      ? {
          ...prevState,
          shippingMethod: {
            ...prevState.shippingMethod,
            value: action.payload,
          },
        }
      : {
          ...prevState,
          shippingMethod: {
            ...prevState.shippingMethod,
            isError: action.payload,
          },
        };
  } else if (action.type == "RESET") {
    return initialValue;
  }
  return prevState;
};

const CheckOutForm = () => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      form.email.value.trim().length === 0 &&
      form.firstName.value.trim().length === 0 &&
      form.lastName.value.trim().length === 0 &&
      form.address.value.trim().length === 0 &&
      form.country.value.trim().length === 0 &&
      form.state.value.trim().length === 0 &&
      form.city.value.trim().length === 0 &&
      form.zipCode.value.trim().length === 0 &&
      form.phone.value.trim().length === 0 &&
      form.shippingMethod.value.trim().length === 0
    ) {
      dispatch({
        type: "formIsNotValid",
        payload: "Please fill the form to proceed further",
      });
    } else if (form.email.value.trim().length === 0) {
      dispatch({ type: "emailErr", payload: "Enter a valid Email Address!" });
    } else if (
      form.firstName.value.trim().length === 0 ||
      form.firstName.value.trim().length < 5
    ) {
      form.firstName.value.trim().length === 0
        ? dispatch({ type: "fnameErr", payload: "Enter a valid First Name!" })
        : dispatch({
            type: "fnameErr",
            payload: "FirstName length must be of greater than 4",
          });
    } else if (form.lastName.value.trim().length === 0) {
      dispatch({ type: "lnameErr", payload: "Enter a valid Last Name!" });
    } else if (form.address.value.trim().length === 0) {
      dispatch({
        type: "addressErr",
        payload: "Enter a valid Street address!",
      });
    } else if (form.country.value.trim().length === 0) {
      dispatch({
        type: "countryErr",
        payload: "Select A Valid Country",
      });
    } else if (form.state.value.trim().length === 0) {
      dispatch({
        type: "stateErr",
        payload: "Select A Valid State",
      });
    } else if (form.city.value.trim().length === 0) {
      dispatch({
        type: "cityErr",
        payload: "Enter a valid city!",
      });
    } else if (form.zipCode.value.trim().length === 0) {
      dispatch({
        type: "zipCodeErr",
        payload: "Enter a valid Zip Code!",
      });
    } else if (form.phone.value.trim().length === 0) {
      dispatch({
        type: "phoneErr",
        payload: "Enter a valid Phone Number!",
      });
    } else if (form.shippingMethod.value.trim().length === 0) {
      dispatch({
        type: "shippingMethodErr",
        payload: "Select a valid Shipping Method",
      });
    } else {
      console.log("CHECK OUT Form Submitted Successfully");
      console.log(form);
      dispatch({ type: "RESET" });
    }
  };
  console.log(form);

  return (
    <section className="w-full lg:w-[63%] space-y-8">
      <form 
        className={`rounded-md sml:p-8 bg-[#F5F5F5] ${
          form.isValid.isError && "p-8 border border-red-500"
        }`}
        // onSubmit={formSubmitHandler}
        onClick={() =>
          form.isValid.isError && dispatch({ type: "formIsValid", payload: "" })
        }
      >
        {form.isValid.isError && (
          <h2
            className="text-2xl font-semibold text-red-500 
        animate-bounce transition-all ease-linear"
          >
            Please fill the form to proceed further
          </h2>
        )}
        <h3 className="text-2xl font-medium text-ternary border-b pb-3 mb-5">
          Shipping Address
        </h3>
        {/* Customer information */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <LabelText
              htmlFor="email"
              text="Email Address"
              error={form.email.isError}
            />
            <Input
              id="email"
              type="text"
              dispatch={dispatch}
              value={form.email.value}
              isError={form.email.isError}
            />
          </div>
          {/* First Name */}
          <div>
            <LabelText
              htmlFor="fname"
              text="First Name"
              error={form.firstName.isError}
            />
            <Input
              id="fname"
              type="text"
              dispatch={dispatch}
              value={form.firstName.value}
              isError={form.firstName.isError}
            />
          </div>
          {/* Last Name */}
          <div>
            <LabelText
              htmlFor="lname"
              text="Last Name"
              error={form.lastName.isError}
            />
            <Input
              id="lname"
              type="text"
              dispatch={dispatch}
              value={form.lastName.value}
              isError={form.lastName.isError}
            />
          </div>
          {/* Company */}
          <div>
            <LabelText
              htmlFor="cmpny"
              text="Company"
              error={form.lastName.isError}
              isMandatory={false}
            />
            <Input
              id="cmpny"
              type="text"
              dispatch={dispatch}
              value={form.company.value}
              isError={form.company.isError}
            />
          </div>
          {/* Address */}
          <div>
            <LabelText
              htmlFor="address"
              text="Street Address"
              error={form.address.isError}
              isMandatory
            />
            <Input
              id="address"
              type="text"
              dispatch={dispatch}
              value={form.address.value}
              isError={form.address.isError}
            />
          </div>
          {/* Country */}
          <div>
            <LabelText
              htmlFor="country"
              text="Country"
              error={form.country.isError}
            />
            <CountrySelect
              id="country"
              dispatch={dispatch}
              isError={form.country.isError}
              value={form.country.value}
            />
          </div>
          {/* State */}
          <div>
            <LabelText
              htmlFor="state"
              text="State"
              error={form.state.isError}
            />
            <StateSelect
              id="state"
              dispatch={dispatch}
              isError={form.state.isError}
              value={form.state.value}
            />
          </div>
          {/* City */}
          <div>
            <LabelText
              htmlFor="city"
              text="City"
              error={form.city.isError}
              isMandatory
            />
            <Input
              id="city"
              type="text"
              dispatch={dispatch}
              value={form.city.value}
              isError={form.city.isError}
            />
          </div>
          {/* Zip Code */}
          <div>
            <LabelText
              htmlFor="zipCode"
              text="Zip/Postal Code"
              error={form.zipCode.isError}
            />
            <Input
              id="zipCode"
              type="text"
              dispatch={dispatch}
              value={form.zipCode.value}
              isError={form.zipCode.isError}
            />
          </div>
          {/* Phone */}
          <div>
            <LabelText
              htmlFor="phone"
              text="Phone"
              error={form.phone.isError}
            />
            <Input
              id="phone"
              type="text"
              dispatch={dispatch}
              value={form.phone.value}
              isError={form.phone.isError}
            />
          </div>
        </div>
        {/* Additional information */}
        {/* <div className="space-y-4">
        <div>
          <label
            htmlFor="textArea"
            className={`inputTitle ${form.isValid.isError && "text-red-500"}`}
          >
            Additional Information
          </label>
          <Input
            id="additionalInfo"
            type="text"
            dispatch={dispatch}
            value={form.additionalInfo.value}
            isError={form.additionalInfo.isError}
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
      </div> */}
        {/* Payment */}
        {/* <div>
        <h3 className={`inputTitle ${form.isValid.isError && "text-red-500"}`}>
          Payment
        </h3>
        <div className="sml:p-3">
          <div
            className={`bg-[#F7F6F7] p-3 sml:p-6 text-ternary flex gap-3 border-t-4 ${
              form.isValid.isError ? "border-red-500" : "border-primary"
            } `}
          >
            <div
              className={`border w-10 h-3 sml:h-5 mt-2 border-t-4 border-r-2 ${
                form.isValid.isError ? "border-red-500" : "border-primary"
              } `}
            />
            <h6 className="leading-8">
              Sorry, it seems that there are no available payment methods.
              Please contact us if you require assistance or wish to make
              alternate arrangements.
            </h6>
          </div>
        </div>
        <button
          className="border flex items-center w-full
              justify-center bg-ternary text-white p-3
              font-semibold gap-3 mt-6 hover:bg-primary
              transition-all ease-linear"
        >
          <FaAmazonPay className="scale-150" />
          <span>{`Place Order  ₹${totalPrice}.00`}</span>
        </button>
      </div>
      {form.isValid.isError && (
        <h2
          className="text-2xl font-semibold text-red-500 
        animate-bounce transition-all ease-linear 
        text-center mt-8"
        >
          Please fill the form to proceed further
        </h2>
      )} */}
      </form>
      <div
        className={`rounded-md sml:p-8 bg-[#F5F5F5] space-y-5
        flex flex-col ${
          (form.isValid.isError || form.shippingMethod.isError) &&
          "p-8 border border-red-500"
        }`}
      >
        <h1 className="text-2xl font-medium text-black border-b-2 pb-3">
          Shipping Methods
        </h1>
        <div className="space-y-2">
          {form.shippingMethod.isError && (
            <h1 className="text-red-600 p-2 animate-pulse">
              {form.shippingMethod.isError}
            </h1>
          )}
          <div className="border bg-white w-full  py-2 flex justify-between items-center relative">
            <label htmlFor="free" className="absolute inset-0" />
            <input
              type="radio"
              name=""
              id="free"
              className="w-1/4"
              onClick={() => {
                form.shippingMethod.isError &&
                  dispatch({ type: "shippingMethodErr", payload: "" });
                dispatch({ type: "shippingMethodVal", payload: "free" });
              }}
              checked={form.shippingMethod.value === "free"}
            />
            <h4 className="w-1/4">$0.00</h4>
            <h4 className="w-1/4">Free</h4>
            <h4 className="w-1/4">Free Shipping</h4>
          </div>
          <div className="border bg-white w-full py-2 flex justify-between items-center relative">
            <label htmlFor="fixed" className="absolute inset-0" />
            <input
              type="radio"
              name=""
              id="fixed"
              className="w-1/4"
              onClick={() => {
                form.shippingMethod.isError &&
                  dispatch({ type: "shippingMethodErr", payload: "" });
                dispatch({
                  type: "shippingMethodVal",
                  payload: "fixed",
                });
              }}
              checked={form.shippingMethod.value === "fixed"}
            />
            <h4 className="w-1/4">$5.00</h4>
            <h4 className="w-1/4">Fixed</h4>
            <h4 className="w-1/4">Flat Rate</h4>
          </div>
        </div>
        <button
          className="bg-primary text-white font-medium w-1/4 py-3 rounded-full ml-auto"
          onClick={formSubmitHandler}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default CheckOutForm;
