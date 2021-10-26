import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const globalReducer = combineReducers({
  data: dataReducer
});

export default globalReducer;
