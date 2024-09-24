import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [items, setItem] = useState([
    {
      id: 1,
      Checked: true,
      item: "Problem Sloving",
    },
    {
      id: 2,
      Checked: true,
      item: "Web Development",
    },
    {
      id: 3,
      Checked: true,
      item: "Project",
    },
  ]);

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

  return (
    <div className="container">
      <Header title="Hello" />
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
