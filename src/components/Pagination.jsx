import React from "react";
import './Pagination.css'

const Pagination = ({ selectedPage,issuesPerPage, totalIssues, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <span onClick={() => paginate(number)} className={`page-link ${number === selectedPage ? "selected" : ""}`}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
