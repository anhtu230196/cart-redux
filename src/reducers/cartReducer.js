import * as types from "../constants/ActionType";

let data = JSON.parse(localStorage.getItem("CART"));
const initialState = data ? data : [];

const cart = (state = initialState, action) => {
  let { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART: {
      console.log(product, quantity);
      let index = state.findIndex((item) => item.product.id === product.id);
      if (index === -1) {
        state.push({
          product,
          quantity,
        });
      } else {
        state[index].quantity += quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case types.DELETE_PRODUCT_IN_CART: {
      let index = state.findIndex((item) => item.product.id === product.id);
      state.splice(index, 1);
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    }
    case types.UPDATE_PRODUTCT_IN_CART: {
      let index = state.findIndex((item) => item.product.id === product.id);
      state[index].quantity = quantity;
      localStorage.setItem("CART", JSON.stringify(state));
    }
    default:
      return state;
  }
};

export default cart;
