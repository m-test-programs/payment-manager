import React from "react";
import priceCalculation from "../../utils/priceCalculation";
import Icon from "../UI/Icon";
import styles from "../../styles/DataRenderers.module.scss";
import { priceFormatter } from "../../utils/priceFormatter";
import useStore from "../../store/store";

function FeeDisplayerEntry(props) {
  const { fee, label, remaining, fees, icon, emphasize } = props;

  const user = useStore((store) => store.selectedUser);

  return (
    <p
      className={`${styles.feeEntry} ${emphasize && styles.feeEntryEmphasize}`}
    >
      <Icon icon={icon} />
      <span>
        {label}:{" "}
        {priceFormatter(
          priceCalculation(
            user && user.payment_details && user.payment_details.payment_amount,
            fee,
            remaining,
            fees
          )
        )}{" "}
        €{" "}
      </span>
      {!remaining && <span>({fee}%)</span>}
    </p>
  );
}

export default FeeDisplayerEntry;
