import React from "react";

import styles from "./App.module.css";
import CountrySelector from "../Components/CountrySelector/CountrySelector";
import CovidCard from "../Components/CovidCard/CovidCard";
import BarChart from "../Components/BarChart/BarChart";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>Covid -19</h1>
        <CountrySelector />
        <CovidCard />
        <BarChart />
      </div>
    );
  }
}

export default App;
