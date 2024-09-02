import React, { useEffect } from "react";
import useStore from "../../store/store";
import FeeDisplayerEntry from "./FeesDisplayerEntry";
import CustomButton from "../UI/CustomButton";
import CustomDialog from "../UI/CustomDialog";
import { useState } from "react";
import FeesForm from "../forms/FeesForm";
import axios from "axios";

function FeesDisplayer(props) {
  const { mode } = props;

  const fees = useStore((store) => store.selectedFees);
  const save = useStore((store) => store.saveFees);

  const invoice = useStore((store) => store.selectedInvoice);

  const [open, setOpen] = useState(false);

  const [platform, setPlatform] = useState(fees.platform_fee);
  const [spedition, setSpedition] = useState(fees.spedition_fee);
  const [processor, setProcessor] = useState(fees.payment_processor_fee);
  const [taxes, setTaxes] = useState(fees.taxes_fee);

  const [error, setError] = useState("");

  const sanitizeInput = (type, value) => {
    if (value < 0) {
      updateForm(type, 0);
    } else if (value > 100) {
      updateForm(type, 100);
    }
  };

  const updateForm = (type, value) => {
    setError("");
    const actions = {
      platform: () => setPlatform(value),
      spedition: () => setSpedition(value),
      processor: () => setProcessor(value),
      taxes: () => setTaxes(value),
    };

    actions[type]();
  };

  const saveFees = async () => {
    const formData = [platform, spedition, processor, taxes];

    const formDataNumeric = formData.map((e) => parseInt(e));

    const percentageSum = formDataNumeric.reduce((a, b) => a + b);

    if (percentageSum > 99) {
      setError("The total fees cannot exceed 99%!");
      return;
    }

    const payload = {
      invoice_number: invoice.invoice_number,
      platform_fee: platform,
      spedition_fee: spedition,
      payment_processor_fee: processor,
      taxes_fee: taxes,
    };

    await save(payload);

    closeDialog();
  };

  const closeDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    setPlatform(fees.platform_fee);
    setSpedition(fees.spedition_fee);
    setProcessor(fees.payment_processor_fee);
    setTaxes(fees.taxes_fee);
  }, [fees]);

  return (
    <div>
      <FeeDisplayerEntry
        fee={fees.platform_fee}
        label="Platform"
        icon="layer-group"
      />
      <FeeDisplayerEntry
        fee={fees.spedition_fee}
        label="Spedition"
        icon="truck"
      />
      <FeeDisplayerEntry
        fee={fees.payment_processor_fee}
        label="Payment provider"
        icon="credit-card"
      />
      <FeeDisplayerEntry fee={fees.taxes_fee} label="Taxes" icon="money-bill" />
      <FeeDisplayerEntry
        fees={fees}
        label="Remaining amount to the merchant"
        remaining
        icon="shop"
        emphasize
      />
      {mode === "edit" && (
        <CustomButton
          title="Edit Fees"
          color="secondary"
          click={() => setOpen(true)}
        />
      )}
      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Fees"
        errorMessage={error}
        actions={[
          {
            title: "Save",
            size: "small",
            color: "secondary",
            click: () => saveFees(fees),
          },
          {
            title: "Cancel",
            size: "small",
            color: "info",
            click: () => closeDialog(),
          },
        ]}
      >
        <FeesForm
          fees={[platform, spedition, processor, taxes]}
          updateForm={updateForm}
          sanitizeInput={sanitizeInput}
        />
      </CustomDialog>
    </div>
  );
}

export default FeesDisplayer;
