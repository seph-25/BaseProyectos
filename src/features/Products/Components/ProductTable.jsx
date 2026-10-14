export function ProductTable({
  products,
  handleDeleteProduct,
  handleToggleProductState,
}) {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th className="table-header">ID</th>
          <th className="table-header">Name</th>
          <th className="table-header">State</th>
          <th className="table-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.state}</td>
            <td>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="button"
              >
                Delete
              </button>
              <button
                onClick={() => handleToggleProductState(product.id)}
                className="button"
              >
                Toggle State
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
