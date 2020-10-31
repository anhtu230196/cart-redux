import * as types from "../constants/ActionType";

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};

export const actRemoveProductInCart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product,
  };
};

export const actChangeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message,
  };
};

export const updateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUTCT_IN_CART,
    product,
    quantity,
  };
};
