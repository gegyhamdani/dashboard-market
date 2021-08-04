import { MoreOutlined } from "@ant-design/icons";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const SalesCard = () => (
  <BaseCard className={styles.card} isShowBorder isShowBoxShadow>
    <div className={styles["card--header"]}>
      <h4>Sales Turnover</h4>
      <MoreOutlined style={{ fontSize: "20px" }} />
    </div>
    <div className={styles["card--body"]}>
      <div className={styles["card--data"]}>
        <h2>Rp 3,600,000</h2>
        <p>
          <span className={styles["card--data-info"]}>&#8595; 13.8%</span> last period in products sold
        </p>
      </div>
      <img src="./assets/icon/sales-icon.png" alt="sales" className={styles["card--sales-image"]} />
    </div>
  </BaseCard>
);

export default SalesCard;
