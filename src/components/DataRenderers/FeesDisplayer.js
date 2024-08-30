import React, { useEffect } from "react";
import useStore from "../../store/store";
import priceCalculation from "../../utils/priceCalculation";
import FreeDisplayerEntry from "./FeesDisplayerEntry";

function FeesDisplayer() {
  const fees = useStore((store) => store.selectedFees);

  useEffect(() => {
    console.log(fees);
  }, [fees]);

  return (
    <div>
      <FreeDisplayerEntry fee={fees.platform_fee} label="Platform costs" />
      <FreeDisplayerEntry fee={fees.spedition_fee} label="Spedition costs" />
      <FreeDisplayerEntry
        fee={fees.payment_processor_fee}
        label="Payment processor cost"
      />
      <FreeDisplayerEntry fee={fees.taxes_fee} label="Taxes" />
      <FreeDisplayerEntry
        fees={fees}
        label="Remaining amount to the merchant"
        remaining
      />
    </div>
  );
}

export default FeesDisplayer;
