import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import CardContainer from "../../../components/CardContainer";
import CustomerDetails from "../../../components/DataRenderers/CustomerDetails";

function DashboardBodyUserInfo() {
  return (
    <div className={styles.userInfo}>
      <CardContainer title="Customer Details">
        <CustomerDetails />
      </CardContainer>
      <CardContainer title="Something" />
    </div>
  );
}

export default DashboardBodyUserInfo;
