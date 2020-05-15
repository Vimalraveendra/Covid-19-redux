import { CovidCardActionTypes } from "./CovidCard.types";
import { fetchData } from "../../Api/Api";

export const fetchDataStart = () => ({
  type: CovidCardActionTypes.REQUEST_DATA_START,
});

export const fetchDataSuccess = (data) => ({
  type: CovidCardActionTypes.REQUEST_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailed = (error) => ({
  type: CovidCardActionTypes.REQUEST_DATA_FAILED,
  payload: error,
});

export const fetchedData = (country) => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetchData(country);
    dispatch(fetchDataSuccess(response));
  } catch (error) {
    dispatch(fetchDataFailed(error));
  }
};
