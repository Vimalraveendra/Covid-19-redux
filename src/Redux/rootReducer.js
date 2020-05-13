import { combineReducers } from "redux";
import { countrySelectorReducer } from "./CountrySelector/CountrySelector.reducer";
import { covidCardReducer } from "./CovidCard/CovidCard.reducer";

export default combineReducers({
  countries: countrySelectorReducer,
  data: covidCardReducer,
});
