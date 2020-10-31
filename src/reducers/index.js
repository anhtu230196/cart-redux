import { combineReducers } from "redux";
import products from "./product";
import cart from "./cartReducer";
import message from "./messageReducer";

const appReducers = combineReducers({
  products,
  cart,
  message,
});

export default appReducers;
