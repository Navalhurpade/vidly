import React from "react";
import _ from 'lodash'
import propTypes from "prop-types";

const Pagination = ({ onClick, pageSize, itemCount, currentPageNo }) => {
  
  const pageCount =Math.ceil(itemCount / pageSize);
  const totalPages = _.range(1, pageCount+1);
  
  if (pageCount === 1 ) return null

  return (
    <nav aria-label="Page navigation ">
      <ul className="pagination">
      {totalPages.map( page => 
        <li key={page} className={page===currentPageNo ? 'page-item active' : 'page-item'}>
        {/*  eslint-disable-next-line */}
          <a className="page-link" onClick={()=>onClick(page) }>
            {page}
          </a>
        </li>
      )}
      </ul>
    </nav>
  );
};


Pagination.propTypes = {
  onClick: propTypes.func.isRequired ,
  pageSize: propTypes.number.isRequired,
  itemCount: propTypes.number.isRequired,
  currentPageNo: propTypes.number.isRequired,
}



export default Pagination;
