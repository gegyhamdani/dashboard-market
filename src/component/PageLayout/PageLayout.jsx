import PropTypes from "prop-types";
import { Layout } from "antd";

import styles from "./index.module.css";

const { Content } = Layout;

const PageLayout = ({ children, headerChildren, siderChildren }) => (
  <Layout className={styles.container}>
    {headerChildren}
    <Layout className={styles["site-layout"]}>
      {siderChildren}
      <Content className={styles["content-container"]}>{children}</Content>
    </Layout>
  </Layout>
);

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  headerChildren: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  siderChildren: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

PageLayout.defaultProps = {
  children: null,
  headerChildren: null,
  siderChildren: null
};

export default PageLayout;
