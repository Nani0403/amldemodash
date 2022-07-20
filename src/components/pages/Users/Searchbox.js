import React from "react";
import "./searchbox.css";


const Searchbox = ({ searchChange }) => {
  return (
    <div className="searchBox">
      <input
        type="search"
        placeholder="search users"
        className="inputBox"
        onChange={searchChange}
        
      />
    </div>
  );
};

export default Searchbox;
