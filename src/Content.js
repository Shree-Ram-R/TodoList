import { ListItem } from "./ListItem";

const Content = ({ items, handleCheck, deleteItem }) => {
  return (
    <main>
      {items.length ? (
        <ListItem
          items={items}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      ) : (
        <h1>List Is Empty!!!</h1>
      )}
    </main>
  );
};

export default Content;
