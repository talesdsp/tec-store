import {createStore} from "redux";
import {RootReducer} from "./ducks/index";

const store = createStore(RootReducer);

export default store;
