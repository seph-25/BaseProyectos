export const productsReducer = (state, action) => {
  switch (action.type) {

    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);

    case "TOGGLE_PRODUCT_STATE":
      return state.map((product) =>
        product.id === action.payload
          ? {
              ...product,
              state:
                product.state === "Available" ? "Unavailable" : "Available",
            }
          : product,
      );
      
    default:
      return state;
  }
};
