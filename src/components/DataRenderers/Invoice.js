import React, { useEffect } from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import { priceFormatter } from "../../utils/priceFormatter";
import FavoriteButton from "../FavoriteButton";
import styles from "../../styles/DataRenderers.module.scss";
import CustomButton from "../CustomButton";
import axios from "axios";
import Icon from "../Icon";

function Invoice() {
  const invoice = useStore((store) => store.selectedInvoice);
  const payment = useStore((store) => store.paymentDetails);
  const fetchInvoices = useStore((store) => store.fetchInvoices);

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.invoice}>
      {/* <div className={styles.favoriteWrapper}>
        <FavoriteButton isFavorite={invoice.invoice_assigned} />
      </div> */}
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
          click={assignPrice}
          title="Assign Price"
          disabled={invoice.invoice_assigned}
        />
        <CustomButton
          click={removePrice}
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
