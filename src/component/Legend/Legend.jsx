import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Legend = ({ text, backgroundColor }) => (
  <div className={styles.container}>
    <div className={styles.legend} style={{ backgroundColor }} />
    <p>{text}</p>
  </div>
);

Legend.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string
};

Legend.defaultProps = {
  text: "",
  backgroundColor: ""
};

export default Legend;
