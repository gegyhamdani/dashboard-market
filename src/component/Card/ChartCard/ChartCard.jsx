import { Select } from "antd";

import { MoreOutlined } from "@ant-design/icons";

import Chart from "../../Chart";
import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const { Option } = Select;

const ChartCard = () => (
  <BaseCard className={styles.card}>
    <div className={styles["card--header"]}>
      <h4>AVERAGE PURCHASE VALUE</h4>
      <div className={styles["card--wrapper__action"]}>
        <Select defaultValue="sixmonth" style={{ width: 150, marginRight: "5px" }}>
          <Option value="sixmonth">Last 6 months</Option>
          <Option value="lastmonth">Last months</Option>
          <Option value="lastweeks">Last weeks</Option>
        </Select>
        <div className={styles["card--wrapper__icon"]}>
          <MoreOutlined style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
    <div className={styles["card--body"]}>
      <Chart />
    </div>
  </BaseCard>
);

export default ChartCard;
