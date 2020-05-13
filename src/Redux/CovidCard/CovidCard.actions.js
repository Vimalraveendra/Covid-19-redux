import { CovidCardActionTypes } from "./CovidCard.types";
import { fetchData } from "../../Api/Api";

export const fetchDataPending = () => ({
  type: CovidCardActionTypes.REQUEST_DATA_PENDING,
});

export const fetchDataSuccess = (data) => ({
  type: CovidCardActionTypes.REQUEST_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailed = (error) => ({
  type: CovidCardActionTypes.REQUEST_DATA_FAILED,
  payload: error,
});

export const fetchedData = () => async (dispatch) => {
  dispatch(fetchDataPending());
  try {
    const response = await fetchData();
    dispatch(fetchDataSuccess(response));
  } catch (error) {
    dispatch(fetchDataFailed(error));
  }
};
