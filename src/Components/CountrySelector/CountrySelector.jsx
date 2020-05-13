import React, { useState, useEffect, useReducer } from "react";
import styles from "./CountrySelector.module.css";
import cx from "classnames";

import { connect } from "react-redux";
import { handleCountry } from "../../Redux/CountrySelector/CountrySelector.actions";

import { fetchCountryData } from "../../Api/Api";
import {
  countrySelectorReducer,
  initialState,
} from "../../Redux/CountrySelector/CountrySelector.reducer";

const CountrySelector = ({ handleCountry }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [state, dispatch] = useReducer(countrySelectorReducer, initialState);

  useEffect(() => {
    const fetchedCountries = async () => {
      setSelectedCountries(await fetchCountryData());
    };
    fetchedCountries();
  }, [setSelectedCountries]);

  return (
    <div className={styles.container}>
      <select
        className={cx(styles.selector, styles.option)}
        onChange={handleCountry}
      >
        <option className={styles.option} value="">
          Select Country
        </option>
        {selectedCountries.map(({ name }, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleCountry: (e) => dispatch(handleCountry(e.target.value)),
});

export default connect(null, mapDispatchToProps)(CountrySelector);
