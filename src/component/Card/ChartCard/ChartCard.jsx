import { Select } from "antd";

import { MoreOutlined } from "@ant-design/icons";

import Chart from "../../Chart";
import BaseCard from "../BaseCard";

import styles from "./index.module.css";
import Legend from "../../Legend";

const { Option } = Select;

const ChartCard = () => (
  <BaseCard className={styles.card}>
    <div className={styles["card--header"]}>
      <h4>AVERAGE PURCHASE VALUE</h4>
      <div className={styles["card--wrapper__action"]}>
        <Select defaultValue="sixmonth" style={{ width: 130, marginRight: "5px" }}>
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
    <div className={styles["card--footer"]}>
      <Legend text="Nett" backgroundColor="#37B04C" />
      <Legend text="Gross" backgroundColor="#289E45" />
      <Legend text="Average Purchase Value" backgroundColor="#7AE28C" />
      <Legend text="Unit Per Transaction" backgroundColor="#707070" />
    </div>
  </BaseCard>
);

export default ChartCard;
