import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    const addedItem = { ...newItem, id: uuid() };
    setNewItem(addedItem);
    onItemFormSubmit(addedItem);
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={event => {
            setNewItem({ ...newItem, name: event.target.value });
          }}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItem.category}
          onChange={event =>
            setNewItem({ ...newItem, category: event.target.value })
          }
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
