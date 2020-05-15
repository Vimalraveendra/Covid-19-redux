import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

// sagaMiddleware.run()

export default store;
