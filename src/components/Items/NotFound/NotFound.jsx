import React from 'react';
import './NotFound.scss';

function NotFound({ beerNotFound }) {

  return (
    <div 
      className={"not-found " + (beerNotFound ? "" : "not-found_hidden")}
    >
      Beers not found in catalog :&#40;
    </div>
  );
}

export default NotFound;