import React from "react";
import styles from "../../../styles/DashboardHeader.module.scss";
import IconBadge from "../../../components/IconBadge";
import Icon from "../../../components/Icon";
import UserBadge from "../../../components/UserBadge";
import SearchInput from "../../../components/SearchInput";

function DashboardHeaderTopbar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.search}>
        <IconBadge icon="dollar-sign" />
        <h3>Easy Payments Dashboard</h3>
        <SearchInput />
      </div>
      <div className={styles.user}>
        <Icon icon="bell" />
        <Icon icon="gear" />
        <UserBadge image="admin.jpg" name="Adrian Smith" />
      </div>
    </div>
  );
}

export default DashboardHeaderTopbar;
