const Button = ({
  children,
  className = "bg-gray-700",
  type,
  onClick = () => {},
}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md border ${className} border-slate-200 text-white cursor-pointer`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
