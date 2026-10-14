import { useProductsLayout } from "../Hooks/useProductsLayout";
import { ShowTotalProducts } from "./ShowTotalProducts";
import { FilterByState } from "./FilterByState";
import { ProductTable } from "./ProductTable";
import { AddProduct } from "./AddProduct";
import "../Styles/style.css";

function ProductsLayout() {

  const {
    products,
    newProduct,
    inputRef,
    handleInputChanges,
    handleAddProduct,
    handleDeleteProduct,
    handleToggleProductState,
    handleKeyDown,
  } = useProductsLayout();

  return (
    <div>

      <h1>Products</h1>

      <section id="add-product-section">
        <AddProduct 
          handleKeyDown={handleKeyDown}
          handleInputChanges={handleInputChanges}
          inputRef={inputRef}
          newProduct={newProduct}
          handleAddProduct={handleAddProduct}
        />
      </section>
      
      <section id="show-products-and-filter-section">
        <ShowTotalProducts products={products} />
        <FilterByState />
      </section>

      <section id="product-table-section" >
        <ProductTable 
          products={products}
          handleDeleteProduct={handleDeleteProduct}
          handleToggleProductState={handleToggleProductState}
        />
      </section>
    </div>
  );
}

export default ProductsLayout;