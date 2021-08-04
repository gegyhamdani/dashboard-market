import { MoreOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import BaseCard from "../BaseCard";
import ProductCard from "../ProductCard";

import styles from "./index.module.css";

const SKUCard = ({ title }) => (
  <BaseCard className={styles.card} isShowBorder isShowBoxShadow>
    <div className={styles["card--header"]}>
      <h4>{title}</h4>
      <div className={styles["card--wrapper__icon"]}>
        <MoreOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
    <div className={styles["card--body"]}>
      <ProductCard highlight />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </BaseCard>
);

SKUCard.propTypes = {
  title: PropTypes.string
};

SKUCard.defaultProps = {
  title: ""
};

export default SKUCard;
