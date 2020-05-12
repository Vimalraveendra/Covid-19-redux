import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
