const AuthLayout = ({ children, title }) => {
  return (
    <div className="w-full max-w-xs">
      {/* Heading */}
      <h1 className="text-3xl text-center font-bold mb-3 text-blue-600">
        {title}
      </h1>
      <p className="font-medium text-center text-slate-500 mb-8">
        Welcome, Please enter your details
      </p>

      {/* Login form */}
      {children}
    </div>
  );
};

export default AuthLayout;
