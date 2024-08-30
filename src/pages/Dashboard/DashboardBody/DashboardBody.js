import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardBodyPaymentInfo from "./DashboardBodyPaymentInfo";
import DashboardBodyUserInfo from "./DashboardBodyUserInfo";

function DashboardBody() {
  return (
    <div className={styles.body}>
      <DashboardBodyPaymentInfo />
      <DashboardBodyUserInfo />
    </div>
  );
}

export default DashboardBody;
