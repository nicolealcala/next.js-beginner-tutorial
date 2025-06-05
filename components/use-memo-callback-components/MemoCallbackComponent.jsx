import React, { useState, useMemo, useCallback } from "react";

const MemoCallbackComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
  ]);

  const [filter, setFilter] = useState("");

  // Memoizing the filtered items list to avoid re-filtering on every render
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, items]);

  // Memoizing the addItem function to avoid unnecessary re-creations
  const addItem = useCallback((newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button
        className="bg-purple-400 text-black p-2 rounded-lg mt-8"
        onClick={() => addItem({ id: items.length + 1, name: "Pineapple" })}
      >
        Add Pineapple
      </button>
    </div>
  );
};

export default MemoCallbackComponent;
