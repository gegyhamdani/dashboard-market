import { Card } from "antd";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const BaseCard = ({ children, className, style, isShowBorder, isShowBoxShadow, onClick }) => (
  <Card
    style={style}
    className={`${styles.card__wrapper} ${className} ${isShowBorder && styles.border} ${isShowBoxShadow && styles["box-shadow"]}`}
    onClick={onClick}
  >
    {children}
  </Card>
);

BaseCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  className: PropTypes.string,
  style: PropTypes.shape({}),
  isShowBorder: PropTypes.bool,
  isShowBoxShadow: PropTypes.bool,
  onClick: PropTypes.func
};

BaseCard.defaultProps = {
  children: null,
  className: null,
  style: null,
  isShowBorder: false,
  isShowBoxShadow: false,
  onClick: () => {}
};

export default BaseCard;
