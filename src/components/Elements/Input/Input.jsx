import { forwardRef } from "react";

// Input component
const Input = forwardRef(({ type, placeholder, name }, ref) => {
  return (
    <input
      type={type}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      ref={ref}
      name={name}
      id={name}
    />
  );
});

Input.displayName = "Input"; // Tambahkan displayName

export default Input;
