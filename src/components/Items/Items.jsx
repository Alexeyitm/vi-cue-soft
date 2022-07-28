import React from 'react';
import './Items.scss';
import Card from './Card/Card';
import Pagination from './Pagination/Pagination';
import NotFound from './NotFound/NotFound';

function Items({
  cards,
  currentPage,
  setCurrentPage,
  paginationActive,
  beerNotFound,
  setIsScroll
}) {

  return (
    <div className="items">
      {
        Array
          .from(cards)
          .map(card => 
            <Card 
              key={card.id} 
              card={card}
              setIsScroll={setIsScroll}
            />
          )
      }
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationActive={paginationActive}
      />
      <NotFound
        beerNotFound={beerNotFound}
      />
    </div>
  );
}

export default Items;