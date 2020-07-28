import React from "react";
import styles from "./CountrySelector.module.css";
import cx from "classnames";

import { connect } from "react-redux";
import { fetchedCountriesStart } from "../../Redux/CountrySelector/CountrySelector.actions";

import { handleCountry } from "../../Redux/CountrySelector/CountrySelector.actions";
import { fetchedDataStart } from "../../Redux/CovidCard/CovidCard.actions";

import { createStructuredSelector } from "reselect";
import {
  selectSelectedCountries,
  selectCountry,
} from "../../Redux/CountrySelector/countrySelector.selector";

class CountrySelector extends React.Component {
  componentDidMount() {
    this.props.fetchedCountries();
  }
  render() {
    const { handleCountry, selectedCountries, fetchedData } = this.props;

    return (
      <div className={styles.container}>
        <select
          aria-label="country picking"
          className={cx(styles.selector, styles.option)}
          onChange={(e) => {
            handleCountry(e);
            fetchedData(e.target.value);
          }}
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
  }
}

const mapStateToProps = createStructuredSelector({
  selectedCountries: selectSelectedCountries,
  country: selectCountry,
});

const mapDispatchToProps = (dispatch) => ({
  handleCountry: (e) => dispatch(handleCountry(e.target.value)),
  fetchedCountries: () => dispatch(fetchedCountriesStart()),
  fetchedData: (country) => dispatch(fetchedDataStart(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
