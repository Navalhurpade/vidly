import React from "react";
import joi from "joi-browser";
import Form from "./comman/Form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submited !");
  };

  render() {
    const description = "We'll never share your email with anyone else.";
    return (
      <React.Fragment>
        <h1>Login Form</h1>
        <br />
        <form onSubmit={this.handleSubmition}>
          {this.renderInput("username", "Username", "email", description)}
          <br />
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
