import {createActions, createReducer} from "reduxsauce";

const {Types, Creators} = createActions({
  addToCart: ["added"],
  removeFromCart: ["removed"],
  clearCart: null,
  increment: ["item", "index"],
  decrement: ["item", "index"]
});

export const [CartTypes, CartCreators] = [Types, Creators];

const INITIAL_STATE = {
  items: []
};

const addToCart = (state = INITIAL_STATE, action) => {
  action.added = {...action.added, quantity: 1, inCart: true};
  return {items: [...state.items, action.added]};
};

const removeFromCart = (state = INITIAL_STATE, action) => {
  //return every minus the removed one
  action.removed = {...action.removed, quantity: 0, inCart: false};
  return {items: state.items.filter((each) => each.id !== action.removed.id)};
};

const clearCart = (state = INITIAL_STATE, action) => {
  return INITIAL_STATE;
};

const increment = (state = INITIAL_STATE, action) => {
  state.items[action.index].quantity++;
  return {items: [...state.items]};
};
const decrement = (state = INITIAL_STATE, action) => {
  state.items[action.index].quantity--;
  return {items: [...state.items]};
};

const CartReducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: addToCart,
  [Types.REMOVE_FROM_CART]: removeFromCart,
  [Types.CLEAR_CART]: clearCart,
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement
});

export default CartReducer;
