import React from "react";

const Input = ({
  name,
  value,
  lable,
  onChange,
  type,
  placeholder,
  children,
  errors,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={lable}>{lable}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        className="form-control"
        id={lable}
        placeholder={placeholder}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
      {children}
    </div>
  );
};

export default Input;
