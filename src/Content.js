import { ListItem } from "./ListItem";

const Content = ({ items, handleCheck, deleteItem }) => {
  return (
    <>
      <ListItem
        items={items}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
    </>
  );
};

export default Content;
