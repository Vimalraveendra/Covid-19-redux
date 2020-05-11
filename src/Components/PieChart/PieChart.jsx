import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data: { confirmed, recovered, deaths } }) => {
  console.log("confirmed", confirmed);
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
        title: { display: true, text: `Current status in ` },
      }}
    />
  ) : null;
  return <div>{pieChart}</div>;
};

export default PieChart;
