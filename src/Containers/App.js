import React from "react";

import styles from "./App.module.css";
import CountrySelector from "../Components/CountrySelector/CountrySelector";
import CovidCard from "../Components/CovidCard/CovidCard";
import PieChart from "../Components/PieChart/PieChart";

import { connect } from "react-redux";
import { fetchData } from "../Api/Api";
import { fetchedData } from "../Redux/CovidCard/CovidCard.actions";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  handleCountry = (e) => {
    const country = e.target.value;
    this.fetchDataAPI(country);
  };

  fetchDataAPI = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  componentDidMount() {
    this.props.fetchDataAPI();
  }
  render() {
    const { data, country } = this.state;
    return !data ? (
      <div>
        <h2>Loading...</h2>
      </div>
    ) : (
      <div className={styles.App}>
        <h1>COVID-19</h1>
        <CountrySelector handleCountry={this.handleCountry} />
        <hr />
        <CovidCard />
        <PieChart data={data} country={country} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,
  country: state.countries.country,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataAPI: () => dispatch(fetchedData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
