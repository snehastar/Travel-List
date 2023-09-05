import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return; //no item is typed
    const newItem = { id: Date.now(), description, quantity, packed: false };
    console.log(newItem);
    onAddItems(newItem);
    //revert the changes
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What Do you need for your trip?😊</h3>

      <input
        type="text"
        placeholder="Type your item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button>ADD</button>
    </form>
  );
}
