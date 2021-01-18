import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const DropDownList = ({ lable, onSelect, options }) => {
  const optionLables = options.map((o) => o.name);

  return (
    <DropdownButton
      onSelect={(e) => onSelect(e)}
      id="dropdown-basic-button"
      title={lable}
    >
      {optionLables.map((lable, index) => (
        <Dropdown.Item
          key={options[index]._id}
          eventKey={lable}
          tag={Link}
          to={`#/action-${lable}`}
        >
          {lable}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropDownList;
