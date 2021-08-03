import InsightCard from "../Card/InsightCard";
import SalesCard from "../Card/SalesCard";

import styles from "./index.module.css";

const Dashboard = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Dashboard</h1>
    <div className={styles["market--wrapper"]}>
      <InsightCard />
      <SalesCard />
    </div>
  </div>
);

export default Dashboard;
