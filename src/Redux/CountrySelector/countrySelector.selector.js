import { createSelector } from "reselect";

const selectCountries = (state) => state.countries;

export const selectSelectedCountries = createSelector(
  [selectCountries],
  (countries) => countries.selectedCountries
);

export const selectCountry = createSelector(
  [selectCountries],
  (countries) => countries.country
);
