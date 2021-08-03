import { UpOutlined } from "@ant-design/icons";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const InsightCard = () => (
  <BaseCard className={styles.card}>
    <div className={styles["card--wrapper"]}>
      <h2>MARKET INSIGHTS</h2>
      <div className={styles["card--helper"]}>
        <img src="./assets/icon/help-icon.png" alt="help" className={styles["card--help-image"]} />
        <button type="button" className={styles["card--button"]}>
          Click Here for Help
        </button>
        <UpOutlined className={styles["card--icon"]} />
      </div>
    </div>
  </BaseCard>
);

export default InsightCard;
