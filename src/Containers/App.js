import React from "react";

import styles from "./App.module.css";
import CountrySelector from "../Components/CountrySelector/CountrySelector";
import CovidCard from "../Components/CovidCard/CovidCard";
import BarChart from "../Components/BarChart/BarChart";

import { fetchData } from "../Api/Api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    return (
      <div className={styles.App}>
        <h1>Covid -19</h1>
        <CountrySelector />
        <CovidCard data={this.state.data} />
        <BarChart />
      </div>
    );
  }
}

export default App;
