import { createStore } from "redux";
import globalReducer from "./reducers/index";
import INITIAL_STATE from "./constants";

const storeGlobal = createStore(
  globalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeGlobal;
