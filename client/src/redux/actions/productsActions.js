export const SELECTED_PRODUCT = "SELECT_PRODUCT";

export const selectedUserAction = (selectedProduct) => {
  return {
    type: SELECTED_PRODUCT,
    payload: selectedProduct,
  };
};
