import React from "react";

export const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        autoFocus
        id="searchitem"
        type="text"
        placeholder="Search item"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
};
