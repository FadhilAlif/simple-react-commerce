import Button from "../Elements/Button";
import InputForm from "../Elements/Input/InputForm";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button
        buttonText="Login"
        className="w-full bg-blue-600 hover:bg-blue-500"
      />
    </form>
  );
};

export default FormLogin;
