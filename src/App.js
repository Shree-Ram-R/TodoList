import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { AddItems } from "./AddItems";
function App() {
  const [items, setItem] = useState([
    {
      id: 1,
      Checked: false,
      item: "Problem Sloving",
    },
    {
      id: 2,
      Checked: false,
      item: "Web Development",
    },
    {
      id: 3,
      Checked: false,
      item: "Project",
    },
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const addNewItems = { id, Checked: false, item };
    const listitems = [...items, addNewItems];
    setItem(listitems);
    localStorage.setItem("Todo_list", JSON.stringify(listitems));
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id
        ? {
            id: item.id,
            Checked: !item.Checked,
            item: item.item,
          }
        : item
    );

    setItem(listitems);
    localStorage.setItem("Todo_list", JSON.stringify(listitems));
  };
  const deleteItem = (id) => {
    const s = items.filter((item) => item.id !== id);
    setItem(s);
    localStorage.setItem("Todo_list", JSON.stringify(s));
  };
  const handleNewItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="container">
      <Header title="TodoList" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleNewItem={handleNewItem}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
