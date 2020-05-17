import { takeLatest, put, call } from "redux-saga/effects";

import CovidCardActionTypes from "./CovidCard.types";

import { fetchedDataSuccess, fetchedDataFailed } from "./CovidCard.actions";
import { fetchData } from "../../Api/Api";

// fetching asynchronous action using redux-sagas

export function* fetchedDataStart(payload) {
  try {
    const response = yield call(fetchData, payload.payload);
    yield put(fetchedDataSuccess(response));
  } catch (error) {
    yield put(fetchedDataFailed(error));
  }
}

// export const fetchedData = takeLatest(
//   CovidCardActionTypes.REQUEST_DATA_START,
//   fetchedDataStart
// );

export function* watchFetchData() {
  yield takeLatest(CovidCardActionTypes.REQUEST_DATA_START, fetchedDataStart);
}
