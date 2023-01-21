import React from "react";
import "../style/SearchBar.css";

const SearchBar = ({ SearchHandle, CheckHandle }) => {
  return (
    <div className="bar">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        onChange={SearchHandle}
      ></input>
      <br></br>
      <input type="checkbox" onChange={CheckHandle}></input>

      <label>Products in Stock</label>
    </div>
  );
};

export default SearchBar;
