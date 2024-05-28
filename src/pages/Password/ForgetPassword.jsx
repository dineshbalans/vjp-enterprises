import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { axiosInstance } from "../../services/axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      user?.email && setemail(user?.email);
    }
  }, [isAuthenticated, user]);

  const { mutate: resetPassword } = useMutation(
    (data) => axiosInstance.post("user/password/forgot", data),
    {
      onSuccess: () => {
        toast.success("Password reset link sent to your email");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="vjp@gmail.com"
                required=""
              />
            </div>

            <button
              type="button"
              className="w-full text-white bg-primary hover:bg-primary   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => resetPassword({ email })}
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
