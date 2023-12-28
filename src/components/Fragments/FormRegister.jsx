import Button from "../Elements/Button";
import InputForm from "../Elements/Input/InputForm";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        name="fullname"
        type="text"
        placeholder="Insert your name"
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="********"
      />
      <Button
        buttonText="Register"
        className="w-full bg-blue-600 hover:bg-blue-500"
      />
    </form>
  );
};

export default FormRegister;
