import React from 'react';

const SortIcon = ({ currentColumn, columnToSort }) => {
    if (currentColumn.path === columnToSort.path) {
        return (columnToSort.order === "asc") ? <i className="fa fa-sort-asc" ></i> : <i className="fa fa-sort-desc" ></i>
    } else return null
}


export default SortIcon;