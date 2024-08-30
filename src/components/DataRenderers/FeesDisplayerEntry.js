import React from "react";
import priceCalculation from "../../utils/priceCalculation";

function FreeDisplayerEntry(props) {
  const { fee, label, remaining, fees } = props;
  return (
    <p>
      {label}: {priceCalculation(1200, fee, remaining, fees)} €{" "}
      {!remaining && <span>({fee}%)</span>}
    </p>
  );
}

export default FreeDisplayerEntry;
