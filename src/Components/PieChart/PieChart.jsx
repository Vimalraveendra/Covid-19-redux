import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./PieChart.module.css";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDataArray } from "../../Redux/CovidCard/CovidCard.selector";
import { selectCountry } from "../../Redux/CountrySelector/countrySelector.selector";

const PieChart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const pieChart = confirmed ? (
    <Pie
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba( 0,255,0,0.5)",
              "rgba(0,0,255,0.5)",
              "rgba(255,0,0,0.8)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text:
            `${country}` === "undefined" || `${country}`.length === 0
              ? `Current status in the World`
              : `Current status in ${country}`,
        },
      }}
    />
  ) : null;
  return <div className={styles.piechart}>{pieChart}</div>;
};

const mapStateToProps = createStructuredSelector({
  data: selectDataArray,
  country: selectCountry,
});
export default connect(mapStateToProps)(PieChart);
