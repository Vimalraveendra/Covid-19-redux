import { CovidCardActionTypes } from "./CovidCard.types";

const initialState = {
  data: {},
  isPending: false,
  error: "",
  country: "",
};

export const covidCardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CovidCardActionTypes.REQUEST_DATA_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case CovidCardActionTypes.REQUEST_DATA_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
      };
    case CovidCardActionTypes.REQUEST_DATA_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };

    case CovidCardActionTypes.HANDLE_COUNTRY_CHANGE:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};
