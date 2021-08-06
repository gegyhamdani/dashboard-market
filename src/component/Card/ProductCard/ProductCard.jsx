import PropTypes from "prop-types";

import BaseCard from "../BaseCard";

import styles from "./index.module.css";

const ProductCard = ({ name, img, price, sold, highlight }) => (
  <BaseCard className={`${styles.card} ${highlight && styles.highlight}`} isShowBorder>
    <div className={styles.container}>
      <img src={img} alt="product" className={`${styles["product-image"]} ${highlight && styles["highlight-image"]}`} />
      <div className={`${styles.product} ${highlight && styles["highlight-product"]}`}>
        <h5>{name}</h5>
        <div className={`${styles["product-detail"]} ${highlight && styles["highlight-product-detail"]}`}>
          <p>{`Rp ${price.toLocaleString("id")}`}</p>
          <p>{sold}</p>
        </div>
      </div>
    </div>
  </BaseCard>
);

ProductCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  sold: PropTypes.number,
  highlight: PropTypes.bool
};

ProductCard.defaultProps = {
  name: "",
  img: "",
  price: 0,
  sold: 0,
  highlight: false
};

export default ProductCard;
