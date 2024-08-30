import React from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import FavoriteButton from "../FavoriteButton";
import styles from "../../styles/DataRenderers.module.scss";
import CustomButton from "../CustomButton";

function Invoice() {
  const invoice = useStore((store) => store.selectedInvoice);

  return (
    <div className={styles.invoice}>
      <div className={styles.favoriteWrapper}>
        <FavoriteButton isFavorite={invoice.invoice_assigned} />
      </div>
      <p>Number: {invoice?.invoice_number} </p>
      <p>Date: {dateFormatter(invoice?.invoice_date)} </p>
      <p>Amount: {invoice?.invoice_amount} € </p>
      <div className={styles.buttons}>
        <CustomButton
          title="Assign Price"
          disabled={invoice.invoice_assigned}
        />
        <CustomButton
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
