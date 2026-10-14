export function AddProduct({
  handleKeyDown,
  handleInputChanges,
  inputRef,
  newProduct,
  handleAddProduct,
}) {
  return (
    <>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        value={newProduct}
        onChange={handleInputChanges}
        ref={inputRef}
      ></input>
      <button
        className="button"
        type="button"
        onClick={newProduct.trim() !== "" ? handleAddProduct : undefined}
      >
        Add Product
      </button>
    </>
  );
}
