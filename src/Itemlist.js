import React from "react";
import { FaTrashAlt } from "react-icons/fa";
export const Itemlist = ({ item, handleCheck, deleteItem }) => {
  let color = "line-through";
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id, item.Checked)}
        checked={item.Checked}
      ></input>
      <label
        style={
          item.Checked
            ? { textDecoration: "line-through", color: "black" }
            : null
        }
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => deleteItem(item.id)}
      />
    </li>
  );
};
