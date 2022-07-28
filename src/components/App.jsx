import { useEffect, useState } from 'react';
import './App.scss';
import { api } from '../utils/Api';
import Input from './Input/Input';
import Items from './Items/Items';

function App() {

  /* Стейты страницы и массива */
  const [currentPage, setCurrentPage] = useState(1);
  const [beerArray, setBeerArray] = useState([]);

  /* Стейт инпута */
  const [inputValue, setIsInputValue] = useState('')

  /* Стейт пагинации */
  const [paginationActive, setPaginationActive] = useState(true);

  /* Стейт скролла */
  const [isScroll, setIsScroll] = useState(false);

  /* Стейт страницы "not found" */
  const [beerNotFound, setBeerNotFound] = useState(false);

  useEffect(() => {
    setBeerArray(
      api
        .getBeer(currentPage)
        .then(res => setBeerArray(res))
        .catch((e) => console.log(e))
    );
  }, [currentPage]);

  useEffect(() => {
    isScroll ? 
      document.body.style.overflow = 'hidden' :
      document.body.style.overflow = 'visible';
  }, [isScroll]);

  useEffect(() => {
    beerArray.length === 0 ? setBeerNotFound(true) : setBeerNotFound(false)
  }, [beerArray]);

  /* Поиск карточек */
  const handleSearch = (e) => {
    inputValue ?
    api
      .getBeerByName(inputValue)
      .then(res => setBeerArray(res))
      .catch((e) => console.log(e))
      .finally(() => setPaginationActive(false))
    :
    api
      .getBeer(1)
      .then(res => setBeerArray(res))
      .catch((e) => console.log(e))
      .finally(() => setPaginationActive(true))
  }

  return (
    <div className="app">
      <Input
        setIsInputValue={setIsInputValue}
        handleSearch={handleSearch}
      />
      <Items
        cards={beerArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationActive={paginationActive}
        beerNotFound={beerNotFound}
        setIsScroll={setIsScroll}
      />
    </div>
  );
}

export default App;
