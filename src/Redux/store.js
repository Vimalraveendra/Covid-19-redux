import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./CovidCard/CovidCard.sagas";
import { watchFetchCountries } from "./CountrySelector/CountrySelector.sagas";

// import {rootSaga} from "./rootSaga"
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(watchFetchCountries);
sagaMiddleware.run(watchFetchData);

export default store;
