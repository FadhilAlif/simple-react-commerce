import Label from "./Label";
import Input from "./Input";

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <div className="mb-5">
      <Label htmlFor={name} text={label} />
      <Input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
