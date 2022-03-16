import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { activeTabReducer } from "./activeTabReducer";

const reducers = combineReducers({
  cartReducer: cartReducer,
  activeTabReducer: activeTabReducer,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export default rootReducer;
