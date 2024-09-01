import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
import CardContainer from "../../../components/CardContainer";
import Invoice from "../../../components/DataRenderers/Invoice";
import InvoiceList from "../../../components/DataRenderers/InvoiceList";
import FeesDisplayer from "../../../components/DataRenderers/FeesDisplayer";
import useStore from "../../../store/store";
import { infoData } from "../../../utils/infoData";

function DashboardBodyPaymentInfo() {
  const filter = useStore((store) => store.filterInvoices);

  const filterInvoices = (invoiceNumber) => {
    filter(invoiceNumber);
  };
  return (
    <div className={styles.paymentInfo}>
      <CardContainer
        title="Invoice Details"
        info={{ title: "Invoice", text: infoData.invoice }}
      >
        <Invoice />
      </CardContainer>
      <CardContainer
        title="Invoices List"
        toolbar={{
          search: {
            method: filterInvoices,
            placeholder: "Search Invoices",
          },
        }}
        info={{ title: "Invoices List", text: infoData.invoiceList }}
      >
        <InvoiceList />
      </CardContainer>
      <CardContainer title="Fees" info={{ title: "Fees", text: infoData.fees }}>
        <FeesDisplayer mode="edit" />
      </CardContainer>
    </div>
  );
}

export default DashboardBodyPaymentInfo;
