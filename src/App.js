import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { AddItems } from "./AddItems";
import { SearchItem } from "./searchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data Not Received");
        const listItems = await response.json();
        setItem(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  });

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const addNewItems = { id, Checked: false, item };
    const listitems = [...items, addNewItems];
    setItem(listitems);
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewItems),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listitems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            Checked: !item.Checked,
          }
        : item
    );

    setItem(listitems);
    const myItem = listitems.filter((item) => item.id === id);

    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Checked: myItem[0].Checked }),
    };
    const reqURL = `${API_URL}/${id}`;

    const result = await apiRequest(reqURL, updateOption);
    if (result) setFetchError(result);
  };
  const deleteItem = async (id) => {
    const s = items.filter((item) => item.id !== id);
    setItem(s);
    const reqURL = `${API_URL}/${id}`;
    const deleteOption = {
      method: "Delete",
    };
    const result = await apiRequest(reqURL, deleteOption);
    if (result) setFetchError(result);
  };
  const handleNewItem = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="container">
      <Header />

      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleNewItem={handleNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading....</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            deleteItem={deleteItem}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
