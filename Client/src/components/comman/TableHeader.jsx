import React, { Component } from "react";
import SortIcon from "./SortIcon";

class TableHeader extends Component {
  sortItemBy = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { columns, sortColumn } = this.props;
    return (
      <thead className="thead-dark">
        <tr>
          {columns.map((item) => (
            <th
              className="clickble"
              key={item.path || item.key}
              onClick={() => this.sortItemBy(item.path)}
              scope="col"
            >
              {item.title}
              {`  `}
              <SortIcon currentColumn={item} columnToSort={sortColumn} />
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
