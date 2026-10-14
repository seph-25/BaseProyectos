import { useState, useRef, useReducer } from "react";
import { productsReducer } from "../Reducers/ProductsReducer";

export function useProductsLayout() {
  const [products, dispatchProducts] = useReducer(productsReducer, []);
  const [newProduct, setNewProduct] = useState("");
  const inputRef = useRef();

  function handleInputChanges(event) {
    setNewProduct(event.target.value);
  }

  function handleAddProduct() {
    const newObject = {
      name: newProduct,
      id: Date.now(),
      state: "Available",
    };
    dispatchProducts({ type: "ADD_PRODUCT", payload: newObject });
    setNewProduct("");
    inputRef.current.focus();
  }

  function handleDeleteProduct(id) {
    dispatchProducts({type: "DELETE_PRODUCT", payload: id});
  }

  function handleToggleProductState(id) {
    dispatchProducts({type: "TOGGLE_PRODUCT_STATE", payload: id});
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAddProduct();
    }
  }

  return {
    products,
    newProduct,
    inputRef,
    handleInputChanges,
    handleAddProduct,
    handleDeleteProduct,
    handleToggleProductState,
    handleKeyDown,
  };
}
