import React from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import { priceFormatter } from "../../utils/priceFormatter";
import styles from "../../styles/DataRenderers.module.scss";
import CustomButton from "../CustomButton";
import Icon from "../Icon";

function Invoice() {
  const invoice = useStore((store) => store.selectedInvoice);

  const openDialog = useStore((store) => store.openSummaryDialog);

  return (
    <div className={styles.invoice}>
      <Icon
        icon="hashtag"
        label={`Invoice number: ${invoice?.invoice_number}`}
      />
      <Icon
        icon="calendar"
        label={`Date: ${dateFormatter(invoice?.invoice_date)}`}
      />
      <Icon
        icon="database"
        label={`Assigned amount: ${
          invoice?.invoice_amount
            ? `${priceFormatter(invoice?.invoice_amount)} €`
            : "Not assigned"
        }`}
      />

      <div className={styles.buttons}>
        <CustomButton
          click={() => openDialog("assign")}
          title="Assign Price"
          disabled={invoice.invoice_assigned}
        />
        <CustomButton
          click={() => openDialog("remove")}
          title="Remove Price"
          color="error"
          disabled={!invoice.invoice_assigned}
        />
        <CustomButton title="Add Note" color="info" />
      </div>
    </div>
  );
}

export default Invoice;
