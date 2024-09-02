import React from "react";
import styles from "../../styles/DataRenderers.module.scss";
import Icon from "../UI/Icon";

function PaymentDetailsMobileEntry(props) {
  const { name, value, icon } = props;

  const iconStyle = {
    color: "white",
    fontSize: "1rem",
  };

  return (
    <div className={styles.paymentDetailsMobile__entry}>
      <Icon icon={icon} sx={iconStyle} />
      <p>{name}:</p>
      <p>{value}</p>
    </div>
  );
}

export default PaymentDetailsMobileEntry;
