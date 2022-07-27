import { useEffect, useState } from 'react';
import './App.scss';
import { api } from '../utils/Api';
import Input from './Input/Input';
import Items from './Items/Items';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [beerArray, setBeerArray] = useState([]);

  useEffect(() => {
    setBeerArray(
      api
        .getBeer(currentPage)
        .then(res => setBeerArray(res))
        .catch((e) => console.log(e))
    );
  }, [currentPage]);

  return (
    <div className="app">
      <Input/>
      <Items
        cards={beerArray}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
