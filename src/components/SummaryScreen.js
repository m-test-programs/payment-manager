import React from "react";
import styles from "../styles/Components.module.scss";
import useStore from "../store/store";
import CardContainer from "../components/CardContainer";
import { Alert, Card } from "@mui/material";
import FeesDisplayer from "./DataRenderers/FeesDisplayer";

function SummaryScreen(props) {
  const { mode } = props;
  const { invoice_number } = useStore((store) => store.selectedInvoice);
  const assignedInvoiceNumber = useStore(
    (store) => store.assignedInvoiceNumber
  );

  const {
    payment_details: { payment_reference_number, payment_amount },
  } = useStore((store) => store.selectedUser);

  return (
    <div className={styles.summary}>
      {assignedInvoiceNumber !== null && mode === "assign" && (
        <Alert severity="warning" variant="filled">
          {`
             The billing is already assigned to invoice ${assignedInvoiceNumber}. If you proceed with
              saving, the billing will be removed from the invoice it was previously
              assigned to.`}
        </Alert>
      )}
      <CardContainer title="Invoice and Payment">
        <p>Invoice Number: {invoice_number} </p>
        <p>Payment Reference Number: {payment_reference_number} </p>
        <p>Total Import Amount: {payment_amount} € </p>
      </CardContainer>

      <CardContainer title="Payment Breakdown">
        <FeesDisplayer mode="view" />
      </CardContainer>
    </div>
  );
}

export default SummaryScreen;
