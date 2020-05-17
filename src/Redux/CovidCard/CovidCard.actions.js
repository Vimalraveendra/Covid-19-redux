import CovidCardActionTypes from "./CovidCard.types";
// import { fetchData } from "../../Api/Api";

export const fetchedDataStart = (country) => ({
  type: CovidCardActionTypes.REQUEST_DATA_START,
  payload: country,
});

export const fetchedDataSuccess = (data) => ({
  type: CovidCardActionTypes.REQUEST_DATA_SUCCESS,
  payload: data,
});

export const fetchedDataFailed = (error) => ({
  type: CovidCardActionTypes.REQUEST_DATA_FAILED,
  payload: error,
});

// export const fetchedData = (country) => async (dispatch) => {
//   dispatch(fetchDataStart());
//   try {
//     const response = await fetchData(country);
//     dispatch(fetchDataSuccess(response));
//   } catch (error) {
//     dispatch(fetchDataFailed(error));
//   }
// };
