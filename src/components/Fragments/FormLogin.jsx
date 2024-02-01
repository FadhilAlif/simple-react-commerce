import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/InputForm";
import { authLogin } from "../../services/auth";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState([]);
  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    authLogin(data, (status, res) => {
      if (status === true) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        // console.log(data);
        // alert(res.response.data);
      }
    });

    // Implement your login logic here
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        name="username"
        type="text"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <Button
        buttonText="Login"
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500"
      >
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-2">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
