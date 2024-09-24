import React from "react";
import { Itemlist } from "./Itemlist";

export const ListItem = ({ items, handleCheck, deleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <Itemlist
          item={item}
          key={item.id}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};
