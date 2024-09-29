import { ListItem } from "./ListItem";

const Content = ({ items, handleCheck, deleteItem }) => {
  return (
    <main>
      <ListItem
        items={items}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
    </main>
  );
};

export default Content;
