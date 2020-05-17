import CountrySelectorActionTypes from "./CountrySelector.types";
// import { fetchCountryData } from "../../Api/Api";
// fetching the country name whenever the user changes

export const handleCountry = (event) => ({
  type: CountrySelectorActionTypes.HANDLE_COUNTRY_CHANGE,
  payload: event,
});
// fetching of country data started
export const fetchedCountriesStart = () => ({
  type: CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_START,
});

// fetching of country data success
export const fetchedCountriesSuccess = (data) => ({
  type: CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_SUCCESS,
  payload: data,
});

// fetching of country data failed
export const fetchedCountriesFailed = (error) => ({
  type: CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_FAILED,
  payload: error,
});

// dispatching the fetchedCountries function to redux-thunk
// redux-thunk intercept the function & invoke the function
//whenever its gets a dispatch inside of this action function
// then its going to dispatch the actual action to the reducer
// first time thunk gets dispatch(fetchCountriesPending()) i.e
//in our case the action is REQUEST_COUNTRY_DATA_PENDING & so on

// export const fetchedCountries = () => async (dispatch) => {
//   dispatch(fetchedCountriesStart());
//   try {
//     const response = await fetchCountryData();
//     dispatch(fetchedCountriesSuccess(response));
//   } catch (error) {
//     dispatch(fetchedCountriesFailed(error));
//   }
// };
