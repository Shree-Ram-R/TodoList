import React from "react";
import { FaPlus } from "react-icons/fa";

export const AddItems = ({ newItem, setNewItem, handleNewItem }) => {
  return (
    <form className="addForm" onSubmit={handleNewItem}>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      ></input>
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};
