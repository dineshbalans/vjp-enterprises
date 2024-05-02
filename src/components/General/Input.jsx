import { LuAsterisk } from "react-icons/lu";

export const LabelText = ({
  htmlFor,
  text,
  error,
  isMandatory = true,
  className,
}) => {
  return (
    <label
      className={`${className} text-black flex items-center gap-1 pb-2 ${
        error && "text-red-500"
      }`}
      htmlFor={htmlFor}
    >
      <span>{text}</span>{" "}
      {isMandatory && <LuAsterisk className="text-red-500 scale-90" />}
    </label>
  );
};

const Input = ({
  type,
  isError,
  id,
  placeholder,
  value,
  dispatch,
  className,
}) => {
  return (
    <>
      <input
        type={type}
        className={`${className} border px-3 py-3 focus:outline-dotted text-ternary w-full placeholder:text-gray-500 ${
          isError && "text-red-600 placeholder:text-red-600 border-red-600"
        }`}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          isError && dispatch({ type: `${id}Err`, payload: "" });
          dispatch({ type: `${id}Val`, payload: e.target.value });
        }}
      />
      {isError && <h1 className="text-red-600 p-2 animate-pulse">{isError}</h1>}
    </>
  );
};

export default Input;
