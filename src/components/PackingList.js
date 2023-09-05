import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems; //creating another array as sorting will mutate the array
  //sorting using derived state
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    //slice to create another array and not mutate the original array
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    //slice to create another array and not mutate the original array
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort By Input Order</option>
          <option value={"description"}>Sort By Description</option>
          <option value={"packed"}>Sort By Packed</option>
        </select>
      </div>
      <button onClick={onClearList}>Clear All</button>
    </div>
  );
}
