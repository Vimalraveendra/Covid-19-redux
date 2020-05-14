import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./PieChart.module.css";

import { connect } from "react-redux";

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

const mapStateToProps = ({ data: { data, country } }) => ({
  data,
  country,
});
export default connect(mapStateToProps)(PieChart);
