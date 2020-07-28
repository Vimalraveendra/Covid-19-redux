import React from "react";
import styles from "./CovidCard.module.css";
import CountUp from "react-countup";
import cx from "classnames";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDataArray } from "../../Redux/CovidCard/CovidCard.selector";

const CovidCard = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <div className={cx(styles.card, styles.infected)}>
        <div className={styles.content}>
          <h2>Infected</h2>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.75}
            separator=","
            className={styles.count}
          />
          <h3>{new Date(lastUpdate).toDateString()}</h3>
          <p>Total number of confirmed cases of COVID-19</p>
        </div>
      </div>
      <div className={cx(styles.card, styles.recovered)}>
        <div className={styles.content}>
          <h2>Recovered</h2>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.75}
            separator=","
            className={styles.count}
          />
          <h3>{new Date(lastUpdate).toDateString()}</h3>
          <p>Total number of recovered cases from COVID-19</p>
        </div>
      </div>
      <div className={cx(styles.card, styles.deaths)}>
        <div className={styles.content}>
          <h2>Deaths</h2>
          <CountUp
            start={0}
            end={deaths.value}
            duration={2.75}
            separator=","
            className={styles.count}
          />
          <h3>{new Date(lastUpdate).toDateString()}</h3>
          <p>Total number of deaths cases caused by COVID-19</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToPros = createStructuredSelector({
  data: selectDataArray,
});
export default connect(mapStateToPros)(CovidCard);
