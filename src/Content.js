import { FaTrashAlt } from "react-icons/fa";
const Content = ({ items, handleCheck, deleteItem }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id, item.Checked)}
              checked={item.Checked}
            ></input>
            <label
              style={
                item.Checked
                  ? { textDecoration: "line-through", color: "cyan" }
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
        ))}
      </ul>
    </main>
  );
};

export default Content;
