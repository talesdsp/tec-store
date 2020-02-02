import {createActions, createReducer} from "reduxsauce";
import Immutable from "seamless-immutable";

const {Types, Creators} = createActions({
  filter: ["value"]
});

export const [FilterTypes, FilterCreators] = [Types, Creators];

export const INITIAL_STATE = Immutable({
  filter: "all"
});

const filter = (state, action) => {
  return {filter: action.value};
};

const FilterReducer = createReducer(INITIAL_STATE, {
  [Types.FILTER]: filter
});

export default FilterReducer;
