const Button = ({ buttonText, className = "bg-gray-700" }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md border ${className} border-slate-200 text-white`}
      type="button"
    >
      {buttonText}
    </button>
  );
};

export default Button;
