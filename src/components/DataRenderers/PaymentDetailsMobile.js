import React from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import styles from "../../styles/DataRenderers.module.scss";
import PaymentDetailsMobileEntry from "./PaymentDetailsMobileEntry";
import { priceFormatter } from "../../utils/priceFormatter";

function PaymentDetailsMobile() {
  const {
    payment_amount: amount,
    payment_date: date,
    payment_reference_number: reference_number,
    payment_status: status,
  } = useStore((store) => store.paymentDetails);

  return (
    <div className={styles.paymentDetailsMobile}>
      <div className={styles.paymentDetailsMobile__payments}>
        <PaymentDetailsMobileEntry
          icon="database"
          name="Current amount"
          value={`${priceFormatter(amount)} €`}
        />
        <PaymentDetailsMobileEntry
          icon="calendar"
          name="Payment Date"
          value={dateFormatter(date)}
        />
        <PaymentDetailsMobileEntry
          icon="fa-check-to-slot"
          name="Payment Status"
          value={status}
        />
        {/* <p className={styles.paymentDetailsMobile__amount}>
          {" "}
          Current amount: {amount} €
        </p>
        <p>Payment Date: {dateFormatter(date)} </p>
        <p>Reference Number: {reference_number} </p>
        <p>Payment Status: {status} </p> */}
      </div>
      <div />
    </div>
  );
}

export default PaymentDetailsMobile;
