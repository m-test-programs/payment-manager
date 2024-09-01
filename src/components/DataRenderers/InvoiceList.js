import React from "react";
import useStore from "../../store/store";
import InvoiceListEntry from "./InvoiceListEntry";
import dateFormatter from "../../utils/dateFormatter";
import styles from "../../styles/DataRenderers.module.scss";

function InvoiceList() {
  const invoices = useStore((store) => store.invoices);
  const selected = useStore((store) => store.selectedInvoice);

  return (
    <div className={styles.invoices}>
      {invoices.map((invoice) => (
        <React.Fragment key={invoice.invoice_number}>
          <InvoiceListEntry
            isSelected={invoice.invoice_number === selected.invoice_number}
            isFavorite={invoice.invoice_assigned}
            number={invoice.invoice_number}
            date={dateFormatter(invoice.invoice_date)}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default InvoiceList;
