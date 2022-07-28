import React, { useState } from 'react';
import './Input.scss';
import { api } from '../../utils/Api';

function Input() {

  const [inputValue, setIsInputValue] = useState('')

  const handleChangeInput = (e) => {
    setIsInputValue(e.target.value);
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(inputValue);
    api.getBeerByName(inputValue).then(res => console.log(res))
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