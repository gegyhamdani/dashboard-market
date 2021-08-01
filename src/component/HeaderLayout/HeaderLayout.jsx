import { Layout } from "antd";

import styles from "./index.module.css";

const { Header } = Layout;

const HeaderLayout = () => (
  <Header className={styles["header-layout"]}>
    <div className={styles.row}>
      <div className={styles["row--logo"]}>
        <img src="./assets/logo/advotics-logo.png" alt="advotics1" className={styles["logo--main"]} />
        <div className={styles["logo--copy"]}>
          <p>powered by</p>
          <img src="./assets/logo/advotics-logo.png" alt="advotics2" className={styles["logo--secondary"]} />
        </div>
      </div>
      <div className={styles["row--user"]}>
        <div className={styles["user--username"]}>
          <p className={styles["username--main"]}>Username</p>
          <p className={styles["username--secondary"]}>Company Name</p>
        </div>
        <button className={styles["user--button"]} type="button">
          <img src="./assets/icon/profile-icon.png" alt="profile" className={styles["user--profile-icon"]} />
        </button>
        <button className={styles["user--button"]} type="button">
          <img src="./assets/icon/logout-icon.png" alt="logout" />
        </button>
      </div>
    </div>
  </Header>
);

export default HeaderLayout;
