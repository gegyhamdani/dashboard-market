import { MoreOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const ProductCard = ({ title }) => (
  <BaseCard className={styles.card} isShowBorder isShowBoxShadow>
    <div className={styles["card--header"]}>
      <h4>{title}</h4>
      <MoreOutlined style={{ fontSize: "20px" }} />
    </div>
    <div className={styles["card--body"]} />
  </BaseCard>
);

ProductCard.propTypes = {
  title: PropTypes.string
};

ProductCard.defaultProps = {
  title: ""
};

export default ProductCard;
