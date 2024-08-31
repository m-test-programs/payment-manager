import React, { useState } from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import { priceFormatter } from "../../utils/priceFormatter";
import styles from "../../styles/DataRenderers.module.scss";
import CustomButton from "../CustomButton";
import axios from "axios";
import Icon from "../Icon";
import CustomDialog from "../UI/CustomDialog";
import SummaryScreen from "../SummaryScreen";

function Invoice() {
  const invoice = useStore((store) => store.selectedInvoice);
  const payment = useStore((store) => store.paymentDetails);
  const fetchInvoices = useStore((store) => store.fetchInvoices);

  const [open, setOpen] = useState(false);

  const [dialogMode, setDialogMode] = useState("");

  const assignPrice = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/invoices/edit_data.php`,
        new URLSearchParams({
          invoice_number: invoice.invoice_number,
          payment_amount: payment.payment_amount,
        })
      );
      fetchInvoices({
        selectNumber: invoice.invoice_number,
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removePrice = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/invoices/edit_data.php`,
        {
          params: {
            invoice_number: invoice.invoice_number,
          },
        }
      );
      fetchInvoices({
        selectNumber: invoice.invoice_number,
      });

      closeDialog();
    } catch (error) {
      console.log(error);
    }
  };

  const openDialog = (mode) => {
    setDialogMode(mode);
    setOpen(true);
  };

  const closeDialog = () => {
    setDialogMode("");
    setOpen(false);
  };

  return (
    <div className={styles.invoice}>
      <CustomDialog
        open={open}
        onClose={closeDialog}
        title="Your Summary for the invoice"
        titleAddon={`#${invoice.invoice_number}`}
        titleAddonStyle={{ color: "var(--info)", fontWeight: 600 }}
        fullWidth
        actions={[
          {
            title:
              dialogMode === "assign"
                ? "Confirm and Assign"
                : "Confirm and Remove",
            click: dialogMode === "assign" ? assignPrice : removePrice,
            color: dialogMode === "assign" ? "" : "error",
          },
          {
            title: "Cancel",
            color: "info",
            click: closeDialog,
          },
        ]}
      >
        <SummaryScreen mode={dialogMode} />
      </CustomDialog>
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
