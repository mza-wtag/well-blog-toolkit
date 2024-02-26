import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "@features/authSlice";
import Button from "@components/Button/Button";
import "@components/Login/login.scss";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registeredUsers = useSelector((state) => state.register.users);

  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "User Name Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    }
    return errors;
  };

  const handleLoginSubmit = (values) => {
    const { userName, password } = values;
    const user = registeredUsers.find(
      (user) => user.userName === userName && user.password === password
    );
    if (user) {
      dispatch(loginUser(user));
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <section className="login-form">
      <h1 className="login-form__title">Login Form</h1>
      <Form
        onSubmit={handleLoginSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="login-form__form" onSubmit={handleSubmit}>
            <div className="login-form__field">
              <label className="login-form__label">User Name:*</label>
              <Field
                className="login-form__input"
                type="text"
                name="userName"
                component="input"
              />
              <div className="login-form__error">
                <Field
                  name="userName"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="login-form__error-text">{error}</span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <div className="login-form__field">
              <label className="login-form__label">Password:*</label>
              <Field
                className="login-form__input"
                type="password"
                name="password"
                component="input"
              />
              <div className="login-form__error">
                <Field
                  name="password"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="login-form__error-text">{error}</span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="login-form__button"
              type="submit"
            >
              Login
            </Button>

            {errorMessage && (
              <div className="login-form__error-message">{errorMessage}</div>
            )}
            <div className="login-form__footer-link">
              Do not have an account?
              <Link to="/register"> Register </Link>
            </div>
          </form>
        )}
      />
    </section>
  );
};

export default Login;
