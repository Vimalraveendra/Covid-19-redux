import React, { useState, useEffect } from "react";
import styles from "./CountrySelector.module.css";
import cx from "classnames";

import { fetchCountryData } from "../../Api/Api";

const CountrySelector = ({ handleCountry }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

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

export default CountrySelector;
