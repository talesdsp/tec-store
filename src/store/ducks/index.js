import {combineReducers} from "redux";
import CartReducer, {CartCreators} from "./cart";
import NotificationReducer, {NotificationCreators} from "./notification";
import ProductReducer, {ProductCreators} from "./products";
import UserReducer, {UserCreators} from "./user";

const logger = (state = {}, action) => {
  console.log(`%cRedux:`, "font-size: 2rem; color: purple", action);
  return state;
};

const RootReducer = combineReducers({
  logger,
  ProductReducer,
  UserReducer,
  CartReducer,
  NotificationReducer
});

export {RootReducer, CartCreators, ProductCreators, UserCreators, NotificationCreators};
