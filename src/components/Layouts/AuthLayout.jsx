import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        {/* Heading */}
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
