import React, { useReducer } from "react";
import Banner from "../../../components/General/Banner";
import Input, { LabelText } from "../../../components/General/Input";

const initialValue = {
  isValid: { isError: "" },
  fName: { value: "", isError: "" },
  lName: { value: "", isError: "" },
  email: { value: "", isError: "" },
  pswd: { value: "", isError: "" },
  confirmPswd: { value: "", isError: "" },
  // checkbox
  newsletter: { value: false, isError: "" },
  remoteShoppingAsst: { value: false, isError: "" },
  showPswd: { value: false, isError: "" },
};

const reducer = (prevState, action) => {
  if (action.type === "formIsNotValid" || action.type === "formIsValid") {
    return {
      ...prevState,
      isValid: { ...prevState.isValid, isError: action.payload },
    };
  }
  // First Name
  else if (action.type === "fnameVal" || action.type === "fnameErr") {
    return action.type === "fnameVal"
      ? {
          ...prevState,
          firstName: { ...prevState.firstName, value: action.payload },
        }
      : {
          ...prevState,
          firstName: { ...prevState.firstName, isError: action.payload },
        };
  }
  // Last Name
  else if (action.type === "lnameVal" || action.type === "lnameErr") {
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
  // Email
  else if (action.type === "emailVal" || action.type === "emailErr") {
    return action.type === "emailVal"
      ? {
          ...prevState,
          email: { ...prevState.email, value: action.payload },
        }
      : {
          ...prevState,
          email: { ...prevState.email, isError: action.payload },
        };
  }
  // Password
  else if (action.type === "pswdVal" || action.type === "pswdErr") {
    return action.type === "pswdVal"
      ? {
          ...prevState,
          pswd: { ...prevState.pswd, value: action.payload },
        }
      : {
          ...prevState,
          pswd: { ...prevState.pswd, isError: action.payload },
        };
  }
  //Confirm Password
  else if (
    action.type === "confirmPswdVal" ||
    action.type === "confirmPswdErr"
  ) {
    return action.type === "confirmPswdVal"
      ? {
          ...prevState,
          confirmPswd: { ...prevState.confirmPswd, value: action.payload },
        }
      : {
          ...prevState,
          confirmPswd: { ...prevState.confirmPswd, isError: action.payload },
        };
  }
  // Newsletter
  else if (action.type === "newsletterVal" || action.type === "newsletterErr") {
    return action.type === "newsletterVal"
      ? {
          ...prevState,
          newsletter: {
            ...prevState.newsletter,
            value: !prevState.newsletter.value,
          },
        }
      : {
          ...prevState,
          newsletter: { ...prevState.newsletter, isError: action.payload },
        };
  }
  // Remote Shopping Assistance
  else if (
    action.type === "remoteShoppingAsstVal" ||
    action.type === "remoteShoppingAsstErr"
  ) {
    return action.type === "remoteShoppingAsstVal"
      ? {
          ...prevState,
          remoteShoppingAsst: {
            ...prevState.remoteShoppingAsst,
            value: !prevState.remoteShoppingAsst.value,
          },
        }
      : {
          ...prevState,
          remoteShoppingAsst: {
            ...prevState.remoteShoppingAsst,
            isError: action.payload,
          },
        };
  }
  // Show Password
  else if (action.type === "showPswdVal" || action.type === "showPswdErr") {
    return action.type === "showPswdVal"
      ? {
          ...prevState,
          showPswd: {
            ...prevState.showPswd,
            value: !prevState.showPswd.value,
          },
        }
      : {
          ...prevState,
          showPswd: { ...prevState.showPswd, isError: action.payload },
        };
  }
  // Reset
  else if (action.type == "RESET") {
    return initialValue;
  }
  return prevState;
};
// Register Page
const SignUp = () => {
  const [signUpForm, dispatch] = useReducer(reducer, initialValue);

  const signUpFormSubmitHandler = (event) => {
    event.preventDefault();
    if (
      form.fName.value.trim().length === 0 &&
      form.lName.value.trim().length === 0 &&
      form.email.value.trim().length === 0 &&
      form.pswd.value.trim().length === 0 &&
      form.confirmPswd.value.trim().length === 0
    ) {
      dispatch({
        type: "formIsNotValid",
        payload: "Please fill the form to proceed further",
      });
    }
    // First Name
    else if (
      form.fName.value.trim().length === 0 ||
      form.fName.value.trim().length < 5
    ) {
      form.fName.value.trim().length === 0
        ? dispatch({ type: "fnameErr", payload: "Enter a valid First Name!" })
        : dispatch({
            type: "fnameErr",
            payload: "FirstName length must be of greater than 4",
          });
    }
    // Last Name
    else if (form.lName.value.trim().length === 0) {
      dispatch({ type: "lnameErr", payload: "Enter a valid Last Name!" });
    }
    // Email
    else if (form.email.value.trim().length === 0) {
      dispatch({ type: "emailErr", payload: "Enter a valid Email Address!" });
    } else {
      console.log("CHECK OUT Form Submitted Successfully");
      console.log(form);
      dispatch({ type: "RESET" });
    }
  };

  return (
    <div>
      <Banner text="Create New Customer Account" />
      <div className="py-14 flex justify-center  gap-6">
        <div className="border w-1/3 p-6 space-y-8 h-fit">
          <h1 className="text-xl font-semibold">Personal Information</h1>
          <form action="" className="text-[15px] text-gray-500 space-y-5">
            <div>
              <LabelText text="First Name" htmlFor="fName" />
              <Input
                id="fName"
                dispatch={dispatch}
                value={signUpForm.fName.value}
                isError={signUpForm.fName.isError}
              />
            </div>
            <div>
              <LabelText text="Last Name" htmlFor="lName" />
              <Input
                id="lName"
                dispatch={dispatch}
                value={signUpForm.lName.value}
              />
            </div>
            <div className="fle items-center gap-2">
              <input type="checkbox" name="newsLetter" id="newsLetter" />
              <label htmlFor="newsLetter"> Sign Up for Newsletter</label>
            </div>
            <div className="fle items-center gap-2">
              <input type="checkbox" name="rmtShpping" id="rmtShpping" />
              <label htmlFor="rmtShpping">
                {" "}
                Allow remote shopping assistance
              </label>
            </div>
          </form>
        </div>
        <div className="border w-1/3 p-6 space-y-8">
          <h1 className="text-xl font-semibold">Sign-in Information</h1>
          <form action="" className="text-[15px] text-gray-500 space-y-5">
            <div>
              <LabelText text="Email" htmlFor="email" />
              <Input
                id="email"
                dispatch={dispatch}
                value={signUpForm.email.value}
              />
            </div>
            <div>
              <LabelText text="Password" htmlFor="pswd" />
              <Input
                id="pswd"
                dispatch={dispatch}
                value={signUpForm.pswd.value}
              />
            </div>
            <div>
              <LabelText text="Confirm Password" htmlFor="confirmPswd" />
              <Input
                id="confirmPswd"
                dispatch={dispatch}
                value={signUpForm.confirmPswd.value}
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="shwPswd" id="shwPswd" />
              <label htmlFor="shwPswd" className="">
                Show Password
              </label>
            </div>
          </form>
          <button
            type="button"
            className="bg-primary text-white rounded-full px-8 py-2 text-[15px] font-medium"
          >
            Create An Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
