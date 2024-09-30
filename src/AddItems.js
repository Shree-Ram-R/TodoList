import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

export const AddItems = ({ newItem, setNewItem, handleNewItem }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleNewItem}>
      <input
        autoFocus
        id="addItem"
        type="text"
        ref={inputRef}
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      ></input>
      <button type="submit" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};
