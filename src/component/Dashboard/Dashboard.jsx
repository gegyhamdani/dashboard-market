import DatePickerCard from "../Card/DatePickerCard";
import ChartCard from "../Card/ChartCard";
import InsightCard from "../Card/InsightCard";
import SalesCard from "../Card/SalesCard";
import SKUCard from "../Card/SKUCard";

import styles from "./index.module.css";
import market from "../../const/market";

const Dashboard = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.title}>Dashboard</h1>
      <DatePickerCard />
    </div>

    <div className={styles["market--wrapper"]}>
      <InsightCard />
      <SalesCard />
      <div className={styles["sales--wrapper"]}>
        <ChartCard />
        <SKUCard title="BEST SELLING SKU" products={market.bestSelling} />
        <SKUCard title="TOP COMPETITOR SKU" products={market.topCompetitor} />
      </div>
    </div>
  </div>
);

export default Dashboard;
