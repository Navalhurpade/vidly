import React, { Component } from "react";
import joi from "joi-browser";
import Input from "./Input";

class Form extends Component {
  //Performing Full form validation by cheking each Input feed by joi!
  validate = () => {
    const option = { abortEarly: false };

    //Refering to the schema in PARENT CLASS !
    const result = joi.validate(this.state.data, this.schema, option);
    if (!result.error) return null;

    const errors = {};
    // eslint-disable-next-line
    result.error.details.map((item) => {
      errors[item.path[0]] = item.message;
    });

    return errors;
  };

  //Cheking indivisual Properties of form while typing
  validateProperty = ({ name, value }) => {
    //creating a custom schema for cheking a single property(Input feed)
    //and coping the focused property from  parents class schema
    const schema = {
      [name]: this.schema[name],
    };

    //Also creating a custom object for joi to validate
    const obj = { [name]: value };

    const { error } = joi.validate(obj, schema);

    //returning a error message if error has occured !
    return error ? error.details[0].message : null;
  };

  //this willl handle onChange attribute of Inputs And do some validation using joi
  handleInput = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    const erorrMessage = this.validateProperty(input);
    if (erorrMessage) {
      errors[input.name] = erorrMessage;
    } else {
      delete errors[input.name];
    }
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors: errors });

    if (this.inputHandling !== undefined) this.inputHandling(input);
  };

  //This will handle Submit button and call doSubmit after validation !
  handleSubmition = (event) => {
    event.preventDefault();
    const error = this.validate();

    //If validate returns errors this updating the states of PARRENT CLASS acordingly
    if (error) {
      this.setState({ error });
      return;
    }
    this.doSubmit();
  };

  renderButton = (lable, onClick) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        onClick={onClick}
        className="btn btn-primary"
      >
        {lable}
      </button>
    );
  };

  renderInput = (name, lable, type = "text", description = "") => {
    const { errors, data } = this.state;
    return (
      <React.Fragment>
        <Input
          name={name}
          value={data[name]}
          lable={lable}
          onChange={this.handleInput}
          type={type}
          placeholder={lable}
          errors={errors[name]}
        />
        <small className="form-text text-muted">{description}</small>
      </React.Fragment>
    );
  };
}

export default Form;
