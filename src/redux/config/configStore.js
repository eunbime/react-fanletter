import { createStore } from "redux";
import { combineReducers } from "redux";
import letterList from "../modules/letterData";

const rootReducer = combineReducers({
  letterList,
});

const store = createStore(rootReducer);

export default store;
