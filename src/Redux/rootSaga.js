import { all, fork } from "redux-saga/effects";
import { watchFetchData } from "./CovidCard/CovidCard.sagas";
import { watchFetchCountries } from "./CountrySelector/CountrySelector.sagas";

export function* rootSaga() {
  //Fork performs a non-blocking operation on the function passed.
  // Call runs a function. If it returns a promise, pauses the saga
  // until the promise is resolved.
  yield all([fork(watchFetchData), fork(watchFetchCountries)]);
}
