import React from "react";
import priceCalculation from "../../utils/priceCalculation";
import Icon from "../Icon";
import styles from "../../styles/DataRenderers.module.scss";
import { priceFormatter } from "../../utils/priceFormatter";

function FeeDisplayerEntry(props) {
  const { fee, label, remaining, fees, icon, emphasize } = props;
  return (
    <p
      className={`${styles.feeEntry} ${emphasize && styles.feeEntryEmphasize}`}
    >
      <Icon icon={icon} />
      <span>
        {label}: {priceFormatter(priceCalculation(1200, fee, remaining, fees))}{" "}
        €{" "}
      </span>
      {!remaining && <span>({fee}%)</span>}
    </p>
  );
}

export default FeeDisplayerEntry;
