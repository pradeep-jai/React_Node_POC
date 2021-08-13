import { useState } from "react";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let errorObj = {
    userName: "",
    password: "",
  };
  const [errors, setErrors] = useState(errorObj);

  const onSubmitLoginForm = (e) => {
    e.preventDefault();
    let errKey = false;
    const errObj = { ...errorObj };

    if (userName === "" || !userName) {
      errObj.userName = "Username is  Required";
      errKey = true;
    }

    if (password === "" || !password) {
      errObj.password = "Password is Required";
      errKey = true;
    }

    if (password && password.length < 6) {
      errObj.password = "Password needs to be 6 charactors or more";
      errKey = true;
    }

    if (errKey) {
      setErrors(errObj);
      return;
    }

    const loginFormInput = {
      userName,
      password,
    };
    props.history.push("/dashboard", loginFormInput);
  };

  const onUserHandleChange = (e) => {
    setUserName(e.target.value);
    const errObj = { ...errors };
    if ((userName && userName.length >= 1) || userName.length === 0) {
      errObj.userName = "";
      setErrors(errObj);
    }
  };

  const onPassHandleChange = (e) => {
    setPassword(e.target.value);
    const errObj = { ...errors };
    if ((password && password.length >= 1) || password.length === 0) {
      errObj.password = "Password needs to be 6 charactors or more";
      if (password.length >= 6) {
        errObj.password = "";
      }
      setErrors(errObj);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <form className="form-signin" onSubmit={onSubmitLoginForm}>
          <h2 className="text-center">Login Form</h2>
          <div className="form-group">
            <input
              type="text"
              value={userName}
              className={`form-control ${errors.userName && "invalid"}`}
              name="username"
              placeholder="User Name"
              autoFocus
              onChange={onUserHandleChange}
            />
            {errors.userName && (
              <small className="text-danger">{errors.userName}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              className={`form-control ${errors.password && "invalid"}`}
              name="password"
              placeholder="Password"
              onChange={onPassHandleChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
