import {useEffect, useState} from 'react';
import './Card.scss';
import Page from './Page/Page';

function Card({ card }) {

  const [isOpenPage, setIsOpenPage] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    isScroll ? 
      document.body.style.overflow = 'hidden' :
      document.body.style.overflow = 'visible';
  }, [isScroll]);

  const handleClickCard = () => {
    setIsOpenPage(true);
    setIsScroll(true);
  }

  return (
    <>
      <article className="card" onClick={handleClickCard}>
        <h2 className="card__title">{card.name}</h2>
        <p className="card__text">
          {card.description.length > 140 ? card.description.slice(0, 140) + '...' : card.description}
        </p>
        <img className="card__img" src={card.image_url} alt={card.name}/>
      </article>

      <Page isOpenPage={isOpenPage}/>
    </>

  );
}

export default Card;