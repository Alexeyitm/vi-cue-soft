import { useEffect, useState } from 'react';
import './App.scss';
import { api } from '../utils/Api';
import Input from './Input/Input';
import Items from './Items/Items';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [beerArray, setBeerArray] = useState([]);

  const [inputValue, setIsInputValue] = useState('')

  const [paginationActive, setPaginationActive] = useState(true);
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
    beerArray.length === 0 ? setBeerNotFound(true) : setBeerNotFound(false)
  }, [beerArray]);

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
        inputValue={inputValue}
        setIsInputValue={setIsInputValue}
        handleSearch={handleSearch}
      />
      <Items
        cards={beerArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginationActive={paginationActive}
        beerNotFound={beerNotFound}
      />
    </div>
  );
}

export default App;
