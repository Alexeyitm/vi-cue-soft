import React from 'react';
import './Input.scss';

function Input({ inputValue, setIsInputValue, handleSearch }) {

  const handleChangeInput = (e) => {
    setIsInputValue(e.target.value);
  }

  return (
    <form
      className="form"
      name="search"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Enter the name of the beer"
        onChange={handleChangeInput}
      ></input>
      <button 
        className="button-search"
        onClick={handleSearch}
      ></button>
    </form>
  );
}

export default Input;