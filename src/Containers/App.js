import React from "react";

import styles from "./App.module.css";
import CountrySelector from "../Components/CountrySelector/CountrySelector";
import CovidCard from "../Components/CovidCard/CovidCard";
import PieChart from "../Components/PieChart/PieChart";

import { connect } from "react-redux";

import { fetchedData } from "../Redux/CovidCard/CovidCard.actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchDataAPI();
  }

  render() {
    console.log("I am App fired");
    const { data } = this.props;
    return !data ? (
      <div>
        <h2>Loading...</h2>
      </div>
    ) : (
      <div className={styles.App}>
        <h1>COVID-19</h1>
        <CountrySelector />
        <hr />
        <CovidCard />
        <PieChart />
      </div>
    );
  }
}

const mapStateToProps = ({ data: { data } }) => ({
  data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataAPI: () => dispatch(fetchedData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
