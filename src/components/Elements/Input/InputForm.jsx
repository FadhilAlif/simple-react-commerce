import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef(({ label, name, type, placeholder }, ref) => {
  return (
    <div className="mb-5">
      <Label htmlFor={name} text={label} />
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

InputForm.displayName = "InputForm";

export default InputForm;
