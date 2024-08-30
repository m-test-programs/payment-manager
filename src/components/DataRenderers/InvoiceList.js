import React from "react";
import useStore from "../../store/store";
import InvoiceListEntry from "./InvoiceListEntry";
import dateFormatter from "../../utils/dateFormatter";

function InvoiceList() {
  const invoices = useStore((store) => store.invoices);
  const selected = useStore((store) => store.selectedInvoice);

  return (
    <div>
      {invoices.map((invoice) => (
        <InvoiceListEntry
          isSelected={invoice.invoice_number === selected.invoice_number}
          isFavorite={invoice.invoice_assigned}
          number={invoice.invoice_number}
          date={dateFormatter(invoice.invoice_date)}
        />
      ))}
    </div>
  );
}

export default InvoiceList;
