import { MoreOutlined } from "@ant-design/icons";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const ChartCard = () => (
  <BaseCard className={styles.card}>
    <div className={styles["card--header"]}>
      <h4>AVERAGE PURCHASE VALUE</h4>
      <div className={styles["card--wrapper__icon"]}>
        <MoreOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
    <div className={styles["card--body"]} />
  </BaseCard>
);

export default ChartCard;
