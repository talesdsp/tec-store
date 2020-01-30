import {createActions, createReducer} from "reduxsauce";
import Immutable from "seamless-immutable";

const {Types, Creators} = createActions({
  openNotification: ["product"],
  closeNotification: ["product"]
});

export const [NotificationTypes, NotificationCreators] = [Types, Creators];

export const INITIAL_STATE = Immutable({
  status: false,
  product: null,
  prev: null
});

const openNotification = (state = INITIAL_STATE, action) => {
  return {status: true, product: action.product, prev: state.product};
};
const closeNotification = (state = INITIAL_STATE, action) => {
  return {status: false, product: action.product, prev: state.product};
};

const NotificationReducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_NOTIFICATION]: openNotification,
  [Types.CLOSE_NOTIFICATION]: closeNotification
});

export default NotificationReducer;
