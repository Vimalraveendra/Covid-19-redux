import { combineReducers } from "redux";
import { countrySelectorReducer } from "./CountrySelector/CountrySelector.reducer";

export default combineReducers({
  countries: countrySelectorReducer,
});
