import React from "react";
import CustomInput from "../UI/CustomInput";
import styles from "../../styles/Forms.module.scss";

function FeesForm(props) {
  const {
    fees: [platform, spedition, processor, taxes],
    updateForm,
    sanitizeInput,
  } = props;

  return (
    <div className={styles.fees}>
      <form action="">
        <CustomInput
          label="Platform costs (%)"
          onChange={(e) => updateForm("platform", e.target.value)}
          onBlur={(e) => sanitizeInput("platform", e.target.value)}
          min={0}
          max={100}
          type="number"
          value={platform}
        />
        <CustomInput
          label="Spedition costs(%)"
          onChange={(e) => updateForm("spedition", e.target.value)}
          onBlur={(e) => sanitizeInput("spedition", e.target.value)}
          type="number"
          value={spedition}
        />
        <CustomInput
          label="Payment Provider costs (%)"
          onChange={(e) => updateForm("processor", e.target.value)}
          onBlur={(e) => sanitizeInput("processor", e.target.value)}
          type="number"
          value={processor}
        />
        <CustomInput
          label="Taxes(%)"
          onChange={(e) => updateForm("taxes", e.target.value)}
          onBlur={(e) => sanitizeInput("taxes", e.target.value)}
          type="number"
          value={taxes}
        />
      </form>
    </div>
  );
}

export default FeesForm;
