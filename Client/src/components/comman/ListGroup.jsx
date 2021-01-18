import React from "react";

const ListGroup = ({
  items,
  textProperty,
  text_id,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className="clickble min-width list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item.name)}
          key={item[text_id]}
          className={
            selectedItem === item.name
              ? "list-group-item min-width active"
              : "list-group-item min-width"
          }
        >
          {" "}
          {item[textProperty]}{" "}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  text_id: "_id",
};

export default ListGroup;
