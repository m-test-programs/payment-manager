import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardBodyInvoiceInfo from "./DashboardBodyInvoiceInfo";
import DashboardBodyUserInfo from "./DashboardBodyUserInfo";

function DashboardBody() {
  return (
    <div className={styles.body}>
      <DashboardBodyInvoiceInfo />
      <DashboardBodyUserInfo />
    </div>
  );
}

export default DashboardBody;
