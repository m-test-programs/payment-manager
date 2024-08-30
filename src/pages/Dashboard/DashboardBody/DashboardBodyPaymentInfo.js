import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import CardContainer from "../../../components/CardContainer";
import Invoice from "../../../components/DataRenderers/Invoice";
import InvoiceList from "../../../components/DataRenderers/InvoiceList";
import FeesDisplayer from "../../../components/DataRenderers/FeesDisplayer";

function DashboardBodyPaymentInfo() {
  return (
    <div className={styles.paymentInfo}>
      <CardContainer title="Invoice">
        <Invoice />
      </CardContainer>
      <CardContainer title="Invoices List">
        <InvoiceList />
      </CardContainer>
      <CardContainer title="Fees">
        <FeesDisplayer />
      </CardContainer>
    </div>
  );
}

export default DashboardBodyPaymentInfo;
