import { all, call } from "redux-saga/effects";
import { watchFetchData } from "./CovidCard/CovidCard.sagas";
import { watchFetchCountries } from "./CountrySelector/CountrySelector.sagas";

export function* rootSaga() {
  yield all[(call(watchFetchData), call(watchFetchCountries))];
}
