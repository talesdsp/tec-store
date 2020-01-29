import {createStore} from "redux";
import {RootReducer} from "./ducks";

const store = createStore(RootReducer);

export default store;
