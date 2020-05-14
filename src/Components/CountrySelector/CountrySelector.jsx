import React from "react";
import styles from "./CountrySelector.module.css";
import cx from "classnames";

import { connect } from "react-redux";
import {
  handleCountry,
  fetchedCountries,
} from "../../Redux/CountrySelector/CountrySelector.actions";
import { fetchedData } from "../../Redux/CovidCard/CovidCard.actions";

class CountrySelector extends React.Component {
  componentDidMount() {
    this.props.fetchedCountries();
  }
  render() {
    const {
      handleCountry,
      selectedCountries,
      country,
      fetchedData,
    } = this.props;
    console.log("#Country", country);
    return (
      <div className={styles.container}>
        <select
          className={cx(styles.selector, styles.option)}
          onChange={(e) => {
            handleCountry(e);
            fetchedData(country);
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

const mapStateToProps = ({ countries: { selectedCountries, country } }) => ({
  selectedCountries,
  country,
});
const mapDispatchToProps = (dispatch) => ({
  handleCountry: (e) => dispatch(handleCountry(e.target.value)),
  fetchedCountries: () => dispatch(fetchedCountries()),
  fetchedData: (country) => dispatch(fetchedData(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
