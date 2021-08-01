import { Card } from "antd";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const CardBase = ({ children, className, style, isShowBorder, isShowBoxShadow }) => (
  <Card
    style={style}
    className={`${styles.card__wrapper} ${className} ${isShowBorder && styles.border} ${isShowBoxShadow && styles["box-shadow"]}`}
  >
    {children}
  </Card>
);

CardBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  style: PropTypes.shape({}),
  className: PropTypes.string,
  isShowBorder: PropTypes.bool,
  isShowBoxShadow: PropTypes.bool
};

CardBase.defaultProps = {
  style: null,
  children: null,
  className: null,
  isShowBorder: false,
  isShowBoxShadow: false
};

export default CardBase;
