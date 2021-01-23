import joi from "joi-browser";
import React from "react";
import Form from "./comman/Form";
import { registerUser } from "../services/userService";
import { loginWithJwt } from "../services/authService";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: joi.string().required().required(),
    password: joi.string().alphanum().min(4).required(),
    name: joi.string().min(3).max(30).required(),
  };

  doSubmit = async () => {
    try {
      const response = await registerUser(this.state.data);
      loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "User is alredy registered !";
        this.setState({ errors });
      }
    }
  };

  render() {
    const { renderInput, renderButton, handleSubmition } = this;
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={handleSubmition}>
          {renderInput("username", "Email", "email")}
          {renderInput("password", "Password", "password")}
          {renderInput("name", "Name")}
          {renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
