import InsightCard from "../Card/InsightCard";
import SalesCard from "../Card/SalesCard";
import ProductCard from "../Card/ProductCard";

import styles from "./index.module.css";

const Dashboard = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Dashboard</h1>
    <div className={styles["market--wrapper"]}>
      <InsightCard />
      <SalesCard />
      <div className={styles["sales--wrapper"]}>
        <ProductCard title="BEST SELLING SKU" />
        <ProductCard title="TOP COMPETITOR SKU" />
      </div>
    </div>
  </div>
);

export default Dashboard;
