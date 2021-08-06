import { MoreOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import BaseCard from "../BaseCard";
import ProductCard from "../ProductCard";

import styles from "./index.module.css";

const SKUCard = ({ title, products }) => (
  <BaseCard className={styles.card} isShowBorder isShowBoxShadow>
    <div className={styles["card--header"]}>
      <h4>{title}</h4>
      <div className={styles["card--wrapper__icon"]}>
        <MoreOutlined style={{ fontSize: "20px" }} />
      </div>
    </div>
    <div className={styles["card--body"]}>
      {products
        .sort((a, b) => b.sold - a.sold)
        .map((product, i) => (
          <ProductCard highlight={i === 0} name={product.name} img={product.img} price={product.price} sold={product.sold} />
        ))}
    </div>
  </BaseCard>
);

SKUCard.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({}))
};

SKUCard.defaultProps = {
  title: "",
  products: []
};

export default SKUCard;
