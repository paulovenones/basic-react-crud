import React from 'react';

import './styles.css';

interface PaginationProps {
  clientsPerPage: number,
  totalClients: number,
  currentPage: number
  paginate(number: number): any,
}

const Pagination: React.FC<PaginationProps> = ({ clientsPerPage, totalClients, currentPage, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a 
              onClick={() => paginate(number)} 
              href="#" 
              className={ currentPage === number ? "page-link active" : "page-link"}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;
