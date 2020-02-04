import {createActions, createReducer} from "reduxsauce";

const {Types, Creators} = createActions({
  open: null,
  close: null
});

export const [MenuTypes, MenuCreators] = [Types, Creators];

export const INITIAL_STATE = false;

const open = (state, action) => true;

const close = (state, action) => false;

const MenuReducer = createReducer(INITIAL_STATE, {
  [Types.OPEN]: open,
  [Types.CLOSE]: close
});

export default MenuReducer;
