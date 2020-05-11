import React from "react";

import styles from "./App.module.css";
import CountrySelector from "../Components/CountrySelector/CountrySelector";
import CovidCard from "../Components/CovidCard/CovidCard";
import PieChart from "../Components/PieChart/PieChart";

import { fetchData } from "../Api/Api";

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
    this.setState({ data: fetchedData });
  };
  componentDidMount() {
    this.fetchDataAPI();
  }
  render() {
    return (
      <div className={styles.App}>
        <h1>Covid -19</h1>
        <CountrySelector handleCountry={this.handleCountry} />
        <hr />
        <CovidCard data={this.state.data} />
        <PieChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
