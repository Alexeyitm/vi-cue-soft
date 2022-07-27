import React from 'react';
import Button from './Button/Button';
import './Pagination.scss';

function Pagination({ currentPage, setCurrentPage }) {

  const pages = [1, 2, 3, 4];

  return (
    <div className="pagination">
      {
        pages.map(page =>
          <Button
            key={page}
            page={page}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )
      }
    </div>
  );
}

export default Pagination;