import { CountrySelectorActionTypes } from "./CountrySelector.types";

const initialState = {
  country: "",
  selectedCountries: [],
  isPending: false,
  error: "",
};

export const countrySelectorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_PENDING:
      return {
        ...state,
        isPending: true,
      };

    case CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        isPending: false,
        selectedCountries: action.payload,
      };

    case CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };

    case CountrySelectorActionTypes.HANDLE_COUNTRY_CHANGE:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};
