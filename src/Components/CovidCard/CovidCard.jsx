import React from "react";
import styles from "./CovidCard.module.css";
import CountUp from "react-countup";
import cx from "classnames";

import { connect } from "react-redux";

const CovidCard = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  console.log("I am covidCard fired");
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <div className={cx(styles.card, styles.infected)}>
        <div className={styles.content}>
          <h3>Infected</h3>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.75}
            separator=","
            className={styles.count}
          />
          <h4>{new Date(lastUpdate).toDateString()}</h4>
          <p>Total number of confirmed cases of COVID-19</p>
        </div>
      </div>
      <div className={cx(styles.card, styles.recovered)}>
        <div className={styles.content}>
          <h3>Recovered</h3>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.75}
            separator=","
            className={styles.count}
          />
          <h4>{new Date(lastUpdate).toDateString()}</h4>
          <p>Total number of recovered cases from COVID-19</p>
        </div>
      </div>
      <div className={cx(styles.card, styles.deaths)}>
        <div className={styles.content}>
          <h3>Deaths</h3>
          <CountUp
            start={0}
            end={deaths.value}
            duration={2.75}
            separator=","
            className={styles.count}
          />
          <h4>{new Date(lastUpdate).toDateString()}</h4>
          <p>Total number of deaths cases caused by COVID-19</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToPros = ({ data: { data } }) => ({
  data,
});
export default connect(mapStateToPros)(CovidCard);
