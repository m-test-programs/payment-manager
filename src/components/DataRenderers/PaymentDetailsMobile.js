import React from "react";
import useStore from "../../store/store";
import dateFormatter from "../../utils/dateFormatter";
import styles from "../../styles/DataRenderers.module.scss";
import PaymentDetailsMobileEntry from "./PaymentDetailsMobileEntry";
import { priceFormatter } from "../../utils/priceFormatter";
import Icon from "../UI/Icon";

function PaymentDetailsMobile() {
  const {
    payment_amount: amount,
    payment_date: date,
    payment_status: status,
  } = useStore((store) => store.paymentDetails);

  const togglePaymentDetails = useStore(
    (store) => store.togglePaymentDetailsMobile
  );

  const paymentDetailsVisible = useStore(
    (store) => store.paymentDetailsMobileVisible
  );

  return (
    <div className={styles.paymentDetailsMobile}>
      {paymentDetailsVisible && (
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
        </div>
      )}
      <div
        className={styles.paymentDetailsMobile__chevron}
        style={{ bottom: paymentDetailsVisible ? "-3.4rem" : "-1.9rem" }}
      >
        <Icon
          icon={paymentDetailsVisible ? "chevron-up" : "chevron-down"}
          click={togglePaymentDetails}
        />
      </div>
      <div />
    </div>
  );
}

export default PaymentDetailsMobile;
