import { takeLatest, put, call } from "redux-saga/effects";

import CountrySelectorActionTypes from "./CountrySelector.types";
import { fetchCountryData } from "../../Api/Api";

import {
  fetchedCountriesSuccess,
  fetchedCountriesFailed,
} from "./CountrySelector.actions";

export function* fetchedCountriesStartAsync() {
  try {
    // yield keyword is similar to await keyword its intercepts execution.
    const response = yield call(fetchCountryData);
    // oR
    //const response = yield fetchData() avoid using call effects
    // put affect is used to dispatch actions to reducer
    yield put(fetchedCountriesSuccess(response));
  } catch (error) {
    yield put(fetchedCountriesFailed(error));
  }
}
export function* watchFetchCountries() {
  yield takeLatest(
    CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_START,
    fetchedCountriesStartAsync
  );
}
