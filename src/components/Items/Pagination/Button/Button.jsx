import React from 'react';
import './Button.scss';

function Button({ page, currentPage, setCurrentPage }) {

  const handleClickPagination = () => {
    setCurrentPage(page);
  }

  return (
    <button 
      className={"button " + (currentPage === page ? "button_active" : " ")}
      key={page}
      onClick={() => handleClickPagination()}
    >
      {page}
    </button>
  );
}

export default Button;