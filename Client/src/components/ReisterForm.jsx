import joi from "joi-browser";
import React from "react";
import Form from "./comman/Form";

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
    username: joi.string().required().email().required(),
    password: joi.string().alphanum().min(8).required(),
    name: joi.string().min(3).max(30).required(),
  };

  doSubmit = () => {
    console.log("Got registered !");
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
