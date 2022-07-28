import React, { useState } from 'react';
import './Input.scss';
import { api } from '../../utils/Api';

function Input({ setBeerArray, setPaginationActive }) {

  const [inputValue, setIsInputValue] = useState('')

  const handleChangeInput = (e) => {
    setIsInputValue(e.target.value);
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
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
    <form
      className="form"
      name="search"
      onSubmit={handleSubmitSearch}
    >
      <input
        className="input"
        type="text"
        placeholder="Enter the name of the beer"
        onChange={handleChangeInput}
      ></input>
    </form>
  );
}

export default Input;