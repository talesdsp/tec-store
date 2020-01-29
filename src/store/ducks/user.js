import {createActions, createReducer} from "reduxsauce";

const {Types, Creators} = createActions({
  signIn: ["user"],
  register: ["user"],
  signOut: null
});

export const [UserTypes, UserCreators] = [Types, Creators];

const INITIAL_STATE = null;

const signIn = (state = INITIAL_STATE, action) => {
  return action.user;
};
const signOut = (state = INITIAL_STATE, action) => {
  return state;
};
const register = (state = INITIAL_STATE, action) => {
  return action.user;
};

const UserReducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN]: signIn,
  [Types.SIGN_OUT]: signOut,
  [Types.REGISTER]: register
});

export default UserReducer;
