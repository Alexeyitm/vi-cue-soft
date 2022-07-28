import React from 'react';
import './Page.scss';

function Page({ 
  card,
  isOpenPage,
  setIsOpenPage,
  setIsScroll 
}) {

  const handleClickButtonClose = () => {
    setIsOpenPage(false);
    setIsScroll(false);
  }

  return (
    <section className={"page" + (isOpenPage ? " page_open app_hidden" : "")}>
      <button
        className="page__button-close"
        onClick={handleClickButtonClose}
      ></button>
      <h2 className="page__title">{card.name}</h2>
      <p className="page__subtitle">{card.tagline}</p>
      <img className="page__img" src={card.image_url} alt={card.name}/>
      <p className="page__abv">ABV: {card.abv}%</p>
      <p className="page__pairing">FOOD PAIRING: {Array.from(card.food_pairing).join(", ")}</p>
      <p className="page__text">DESCRIPTION: {card.description}</p>
    </section>
  );
}

export default Page;