import CountrySelectorActionTypes from "./CountrySelector.types";

export const initialState = {
  selectedCountries: [],
  isPending: false,
  error: "",
  Country: "",
};

export const countrySelectorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CountrySelectorActionTypes.REQUEST_COUNTRY_DATA_START:
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
