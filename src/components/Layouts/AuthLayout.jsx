import { Link } from "react-router-dom";
import { DarkMode } from "../context/DarkMode";
import { useContext } from "react";

const AuthLayout = ({ children, title, type }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log("Dark Mode =>", isDarkMode);
  }

  const bgColor = isDarkMode ? "bg-slate-700" : "bg-slate-500";

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isDarkMode && "bg-slate-800"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className={`absolute top-5 right-5 ${bgColor} rounded-full px-3 py-2 text-white shadow-2xl border-blue-500`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <h1 className="text-3xl text-center font-bold mb-3 text-blue-600">
          {title}
        </h1>
        <p className="font-medium text-center text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-center text-sm mt-4">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {type === "login" ? (
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              Sign Up
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline"
            >
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
