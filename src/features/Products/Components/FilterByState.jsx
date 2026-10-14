export function FilterByState() {
  return (
    <select className="select" name="filter-by-state" id="filter-by-state">
      <option value="all">All</option>
      <option value="available">Available</option>
      <option value="unavailable">Unavailable</option>
    </select>
  );
}
