import { takeLatest, put, call } from "redux-saga/effects";

import { CovidCardActionTypes } from "./CovidCard.types";

import { fetchDataSuccess, fetchDataFailed } from "./CovidCard.actions";
import { fetchData } from "../../Api/Api";

// fetching asynchronous action using redux-sagas

export function* fetchDataStartAsync(country) {
  try {
    const response = yield fetchData(country);
    yield put(fetchDataSuccess(response));
  } catch (error) {
    yield put(fetchDataFailed(error));
  }
}

export function* fetchedData(country) {
  yield takeLatest(
    CovidCardActionTypes.REQUEST_DATA_START,
    fetchDataStartAsync
  );
}
