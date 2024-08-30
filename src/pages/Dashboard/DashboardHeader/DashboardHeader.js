import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardHeaderTopbar from "./DashboardHeaderTopbar";
import DashboardHeaderNav from "./DashboardHeaderNav";
import Icon from "../../../components/Icon";

function DashboardHeader() {
  return (
    <div className={styles.header}>
      <DashboardHeaderTopbar />
      <DashboardHeaderNav />
      <div className={styles.back}>
        <Icon
          icon="chevron-left"
          customStyle={{ color: "#fff", fontSize: "0.6rem" }}
        />
        <p>Back to Main Dashboard</p>
      </div>
    </div>
  );
}

export default DashboardHeader;
