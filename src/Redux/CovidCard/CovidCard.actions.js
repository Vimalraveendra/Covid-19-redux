import { CovidCardActionTypes } from "./CovidCard.types";
import { fetchData } from "../../Api/Api";

// fetching the country name whenever the user changes
export const handleCountry = (event) => ({
  type: CovidCardActionTypes.HANDLE_COUNTRY_CHANGE,
  payload: event,
});

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

export const fetchedData = (country) => async (dispatch) => {
  dispatch(fetchDataPending());
  try {
    const response = await fetchData(country);
    dispatch(fetchDataSuccess(response));
  } catch (error) {
    dispatch(fetchDataFailed(error));
  }
};
