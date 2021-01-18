import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  state = {};

  renderCell = (item, column) => {
    if (column.content !== undefined) {
      return column.content(item);
    }

    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              {columns.map((column) => (
                <td key={item._id + (column.title || column.key)}>
                  {this.renderCell(item, column)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
