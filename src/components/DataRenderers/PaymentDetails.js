import React from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import styles from "../../styles/DataRenderers.module.scss";
import CustomButton from "../UI/CustomButton";
import Counter from "../UI/Counter";
import { priceFormatter } from "../../utils/priceFormatter";

function PaymentDetails() {
  const {
    payment_amount: amount,
    payment_date: date,
    payment_reference_number: reference_number,
    payment_status: status,
  } = useStore((store) => store.paymentDetails);

  return (
    <div className={styles.paymentDetails}>
      <div className={styles.paymentDetails__amount}>
        <Counter>{priceFormatter(amount)} €</Counter>
      </div>
      <p>Payment Date: {dateFormatter(date)} </p>
      <p>Reference Number: {reference_number} </p>
      <p>Payment Status: {status} </p>
      <CustomButton color="primary" title="Payment Details PDF" fullWidth />
    </div>
  );
}

export default PaymentDetails;
