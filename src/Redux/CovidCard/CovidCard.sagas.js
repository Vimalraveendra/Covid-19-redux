import { takeLatest, put, call } from "redux-saga/effects";

import CovidCardActionTypes from "./CovidCard.types";

import { fetchedDataSuccess, fetchedDataFailed } from "./CovidCard.actions";
import { fetchData } from "../../Api/Api";

// fetching asynchronous action using redux-sagas

export function* fetchedDataStart(action) {
  try {
    const response = yield call(fetchData, action.payload);
    yield put(fetchedDataSuccess(response));
  } catch (error) {
    yield put(fetchedDataFailed(error));
  }
}

export function* watchFetchData() {
  yield takeLatest(CovidCardActionTypes.REQUEST_DATA_START, fetchedDataStart);
}
