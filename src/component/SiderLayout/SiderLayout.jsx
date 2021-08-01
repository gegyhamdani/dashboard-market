import { useState } from "react";

import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import styles from "./index.module.css";

const { Sider } = Layout;

const SiderLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleMenu = () => {
    setCollapsed(state => !state);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className={styles["sider-layout"]}>
      <button className={styles["menu--trigger"]} onClick={toggleMenu} type="button">
        <MenuOutlined />
      </button>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          className={styles["menu--item"]}
          icon={<img src="./assets/icon/dashboard-icon.png" alt="dashboard" className={styles["menu--image"]} />}
        >
          Dashboard
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderLayout;
