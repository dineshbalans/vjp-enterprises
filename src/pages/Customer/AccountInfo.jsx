import React, { useReducer } from "react";
import Input, { LabelText } from "../../components/General/Input";

const initialArg = {
  fName: { value: "", error: "" },
  lName: { value: "", error: "" },
  email: { value: "", error: "" },
  currentPswd: { value: "", error: "" },
  newPswd: { value: "", error: "" },
  confirmNewPswd: { value: "", error: "" },
  // checkbox
  changeEmail: { value: false, error: "" },
  changePswd: { value: false, error: "" },
  showPswd: { value: false, error: "" },
};

const reducer = (prevState, action) => {
  // First Name
  if (action.type === "fNameVal" || action.type === "fNameErr") {
    return action.type === "fNameVal"
      ? {
          ...prevState,
          fName: { ...prevState.fName, value: action.payload },
        }
      : {
          ...prevState,
          fName: { ...prevState.fName, error: action.payload },
        };
  }
  // Last Name
  else if (action.type === "lNameVal" || action.type === "lNameErr") {
    return action.type === "lNameVal"
      ? {
          ...prevState,
          lName: { ...prevState.lName, value: action.payload },
        }
      : {
          ...prevState,
          lName: { ...prevState.lName, error: action.payload },
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
          email: { ...prevState.email, error: action.payload },
        };
  }
  // Current Password
  else if (
    action.type === "currentPswdVal" ||
    action.type === "currentPswdErr"
  ) {
    return action.type === "currentPswdVal"
      ? {
          ...prevState,
          currentPswd: { ...prevState.currentPswd, value: action.payload },
        }
      : {
          ...prevState,
          currentPswd: { ...prevState.currentPswd, error: action.payload },
        };
  }
  // New Password
  else if (action.type === "newPswdVal" || action.type === "newPswdErr") {
    return action.type === "newPswdVal"
      ? {
          ...prevState,
          newPswd: { ...prevState.newPswd, value: action.payload },
        }
      : {
          ...prevState,
          newPswd: { ...prevState.newPswd, error: action.payload },
        };
  }
  // Confirm New Password
  else if (
    action.type === "confirmNewPswdVal" ||
    action.type === "confirmNewPswdErr"
  ) {
    return action.type === "confirmNewPswdVal"
      ? {
          ...prevState,
          confirmNewPswd: {
            ...prevState.confirmNewPswd,
            value: action.payload,
          },
        }
      : {
          ...prevState,
          confirmNewPswd: {
            ...prevState.confirmNewPswd,
            error: action.payload,
          },
        };
  }
  // Checkbox: Change Email
  else if (
    action.type === "changeEmailVal" ||
    action.type === "changeEmailErr"
  ) {
    return action.type === "changeEmailVal"
      ? {
          ...prevState,
          changeEmail: {
            ...prevState.changeEmail,
            value: !prevState.changeEmail.value,
          },
        }
      : {
          ...prevState,
          changeEmail: { ...prevState.changeEmail, error: action.payload },
        };
  }
  // Checkbox: Change Password
  else if (action.type === "changePswdVal" || action.type === "changePswdErr") {
    return action.type === "changePswdVal"
      ? {
          ...prevState,
          changePswd: {
            ...prevState.changePswd,
            value: !prevState.changePswd.value,
          },
        }
      : {
          ...prevState,
          changePswd: { ...prevState.changePswd, error: action.payload },
        };
  }
  // Checkbox: Show Password
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
          showPswd: { ...prevState.showPswd, error: action.payload },
        };
  }
  // Reset All Value
  else if (action.type === "RESET") {
    return initialArg;
  }
};

const AccountInfo = () => {
  const [user, dispatch] = useReducer(reducer, initialArg);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form className="border p-7 space-y-4 pb-11" onSubmit={submitHandler}>
      <div className="space-y-5">
        <h1 className="text-xl text-lblack pb-3">Account Information</h1>
        {/* First Name */}
        <div>
          <LabelText
            text="First Name"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="fName"
            error={user.fName.error}
          />
          <Input
            className="text-gray-600 text-sm pb-2 pt-2"
            id="fName"
            dispatch={dispatch}
            value={user.fName.value}
            isError={user.fName.error}
          />
        </div>
        {/* Last Name */}
        <div>
          <LabelText
            text="Last Name"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="lName"
            error={user.lName.error}
          />
          <Input
            className="text-gray-600 text-sm pb-2 pt-2"
            id="lName"
            dispatch={dispatch}
            value={user.lName.value}
            isError={user.lName.error}
          />
        </div>
        {/* Last Name */}
        <div>
          <LabelText
            text="Last Name"
            className="text-gray-600 text-[15px] pb-1"
            htmlFor="lName"
            error={user.lName.error}
          />
          <Input
            className="text-gray-600 text-sm pb-2 pt-2"
            id="lName"
            dispatch={dispatch}
            value={user.lName.value}
            isError={user.lName.error}
          />
        </div>
        {/* CheckBox: Change Email */}
        <div className="flex  items-center gap-2">
          <input
            type="checkbox"
            id="chngeEmail"
            checked={user.changeEmail.value}
            onChange={() => dispatch({ type: "changeEmailVal" })}
          />
          <LabelText
            text="Change Email"
            htmlFor="chngeEmail"
            isMandatory={false}
            className="text-gray-600 text-[15px] pb-0"
          />
        </div>
        {/* CheckBox: Change Password */}
        <div className="flex  items-center gap-2">
          <input
            type="checkbox"
            id="chngePswd"
            checked={user.changePswd.value}
            onChange={() => dispatch({ type: "changePswdVal" })}
          />
          <LabelText
            text="Change Password"
            htmlFor="chngePswd"
            isMandatory={false}
            className="text-gray-600 text-[15px] pb-0"
          />
        </div>

        {(user.changeEmail.value || user.changePswd.value) && (
          <div className="space-y-5 mt-10">
            <h1 className="text-xl text-lblack pb-3">{`Change ${
              user.changeEmail.value && user.changePswd.value
                ? "Email and Password"
                : user.changeEmail.value
                ? "Email"
                : "Password"
            }`}</h1>
            {/* Email */}
            {user.changeEmail.value && (
              <div>
                <LabelText
                  text="Email"
                  className="text-gray-600 text-[15px] pb-1"
                  htmlFor="email"
                  error={user.email.error}
                />
                <Input
                  className="text-gray-600 text-sm pb-2 pt-2"
                  id="email"
                  dispatch={dispatch}
                  value={user.email.value}
                  isError={user.email.error}
                />
              </div>
            )}
            {/*  Current Password  */}
            <div>
              <LabelText
                text="Current Password"
                className="text-gray-600 text-[15px] pb-1"
                htmlFor="currentPswd"
                error={user.currentPswd.error}
              />
              <Input
                className="text-gray-600 text-sm pb-2 pt-2"
                type={user.showPswd.value ? "text" : "password"}
                id="currentPswd"
                dispatch={dispatch}
                value={user.currentPswd.value}
                isError={user.currentPswd.error}
              />
            </div>
            {user.changePswd.value && (
              <>
                {/*  New Password  */}
                <div>
                  <LabelText
                    text="New Password"
                    className="text-gray-600 text-[15px] pb-1"
                    htmlFor="newPswd"
                    error={user.newPswd.error}
                  />
                  <Input
                    className="text-gray-600 text-sm pb-2 pt-2"
                    type={user.showPswd.value ? "text" : "password"}
                    id="newPswd"
                    dispatch={dispatch}
                    value={user.newPswd.value}
                    isError={user.newPswd.error}
                  />
                </div>
                {/*  Confirm New Password  */}
                <div>
                  <LabelText
                    text="Confirm New Password"
                    className="text-gray-600 text-[15px] pb-1"
                    htmlFor="confirmNewPswd"
                    error={user.confirmNewPswd.error}
                  />
                  <Input
                    className="text-gray-600 text-sm pb-2 pt-2"
                    type={user.showPswd.value ? "text" : "password"}
                    id="confirmNewPswd"
                    dispatch={dispatch}
                    value={user.confirmNewPswd.value}
                    isError={user.confirmNewPswd.error}
                  />
                </div>
              </>
            )}
            {/* CheckBox: Show Password */}
            <div className="flex  items-center gap-2">
              <input
                type="checkbox"
                id="showPswd"
                checked={user.showPswd.value}
                onChange={() => dispatch({ type: "showPswdVal" })}
              />
              <LabelText
                text="Show Password"
                htmlFor="showPswd"
                isMandatory={false}
                className="text-gray-600 text-[15px] pb-0"
              />
            </div>
          </div>
        )}
        <button className="primaryBttn">Save</button>
      </div>
    </form>
  );
};

export default AccountInfo;
