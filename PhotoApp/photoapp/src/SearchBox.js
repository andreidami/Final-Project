import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search">
      <input
        className="input"
        types="search"
        placeholder="Search dog names..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;