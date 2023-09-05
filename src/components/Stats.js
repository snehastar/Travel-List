export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats"> Start adding your items to your packing list 🧳</p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You packed everything! Let's go ✈️"
        : `You have ${numItems} items on your list and you've already packed
        ${numPacked} (${percentage}%)🛍️`}
    </footer>
  );
}
