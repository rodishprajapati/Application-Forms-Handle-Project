import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface ILogin {
  userName: string;
  password: string;
}
const loginInitialValues: ILogin = {
  userName: "",
  password: "",
};
const loginValidation = Yup.object({
  userName: Yup.string().required("Please Enter UserName "),
  password: Yup.string().required("PLease Enter Password"),
});

const handleLoginForm = (values: ILogin) => {
  console.log(values);
};

const Login: React.FC = () => {
  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik<ILogin>({
      initialValues: loginInitialValues,
      validationSchema: loginValidation,
      onSubmit: (values) => {
        handleLoginForm(values);
      },
    });
  return (
    <>
      <form>
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram Logo"
                className="w-24"
              />
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              {/* Username Field */}
              <div className="mb-4">
                <input
                  type="text"
                  name="userName"
                  placeholder="Username or Email"
                  className={`w-full px-4 py-2 border ${
                    touched.userName && errors.userName
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={values.userName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.userName && errors.userName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.userName}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`w-full px-4 py-2 border ${
                    touched.password && errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Log In
              </button>
            </form>

            {/* Or Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Sign Up */}
            <div className="mt-4 text-center">
              <span className="text-gray-500 text-sm">
                Don't have an account?{" "}
              </span>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Sign up
              </a>
            </div>

            {/* Forgot Password */}
            <div className="text-center mb-4">
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
