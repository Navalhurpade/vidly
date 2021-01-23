import React from "react";
import joi from "joi-browser";
import Form from "./comman/Form";
import { login } from "../services/authService";

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

  doSubmit = async () => {
    try {
      await login(this.state.data);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = "Invalid email or password !";
        this.setState({ errors });
      }
    }
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
