import { useState } from "react";
import CardListItem from "./CardListItem";
import { ListItem as ItemType } from "../types/list";

function CardListGroup() {
  const [items, setItems] = useState<ItemType[]>([
    { id: 1, text: "Teval, The Balanced Scale" },
    { id: 2, text: "The One Ring" },
    { id: 3, text: "Galadriel, Light of Valinor" },
    { id: 4, text: "The Ozolith" },
    { id: 5, text: "Wyleth, Soul of Steel" },
  ]);

  const [newItem, setNewItem] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;

    setItems((prev) => [...prev, { id: Date.now(), text: newItem }]);

    setNewItem("");
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const startEdit = (item: ItemType) => {
    setEditingId(item.id);
    setEditText(item.text);
  };

  const saveEdit = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: editText } : item)),
    );
    setEditingId(null);
  };

  return (
    <>
      <div className="mb-3 d-flex gap-2">
        <input
          className="form-control"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addItem}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {items.map((item) => (
          <CardListItem
            key={item.id}
            item={item}
            isEditing={editingId === item.id}
            editText={editText}
            onEditTextChange={setEditText}
            onEdit={() => startEdit(item)}
            onSave={() => saveEdit(item.id)}
            onDelete={() => deleteItem(item.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default CardListGroup;
