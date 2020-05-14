import React from "react";
import styles from "./CountrySelector.module.css";
import cx from "classnames";

import { connect } from "react-redux";
import {
  handleCountry,
  fetchedCountries,
} from "../../Redux/CountrySelector/CountrySelector.actions";

class CountrySelector extends React.Component {
  componentDidMount() {
    this.props.fetchedCountries(this.props.country);
  }
  render() {
    const { handleCountry, selectedCountries } = this.props;
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
  }
}

const mapStateToProps = ({ countries: { selectedCountries, country } }) => ({
  selectedCountries,
  country,
});
const mapDispatchToProps = (dispatch) => ({
  handleCountry: (e) => dispatch(handleCountry(e.target.value)),
  fetchedCountries: (country) => dispatch(fetchedCountries(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
