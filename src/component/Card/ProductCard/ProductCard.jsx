import PropTypes from "prop-types";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const ProductCard = ({ highlight }) => (
  <BaseCard className={`${styles.card} ${highlight && styles.highlight}`} isShowBorder>
    <div className={styles.container}>
      <img
        src="./assets/icon/sales-icon.png"
        alt="product"
        className={`${styles["product-image"]} ${highlight && styles["highlight-image"]}`}
      />
      <div className={`${styles.product} ${highlight && styles["highlight-product"]}`}>
        <h5>Nama Produk</h5>
        <div className={`${styles["product-detail"]} ${highlight && styles["highlight-product-detail"]}`}>
          <p>Rp 100.000</p>
          <p>100</p>
        </div>
      </div>
    </div>
  </BaseCard>
);

ProductCard.propTypes = {
  highlight: PropTypes.bool
};

ProductCard.defaultProps = {
  highlight: false
};

export default ProductCard;
