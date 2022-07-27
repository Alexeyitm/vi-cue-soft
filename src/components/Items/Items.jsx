import React from 'react';
import './Items.scss';
import Card from './Card/Card';
import Pagination from './Pagination/Pagination';

function Items({ cards, currentPage, setCurrentPage }) {

  return (
    <div className="items">
      {
        Array
          .from(cards)
          .map(card => 
            <Card 
              key={card.id} 
              card={card}
            />
          )
      }
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Items;