import React from "react";
import FavoriteButton from "../FavoriteButton";
import styles from "../../styles/Components.module.scss";
import effects from "../../styles/Effects.module.scss";
import useStore from "../../store/store";

function InvoiceListEntry(props) {
  const { number, date, isSelected, isFavorite } = props;

  const select = useStore((store) => store.selectInvoice);

  const openDialog = useStore((store) => store.openSummaryDialog);

  const classes = `${styles.invoiceEntry} ${isSelected && effects.highlighted}`;

  const selectInvoice = (number) => {
    console.log("seletta");
    select(number);
  };

  return (
    <div
      className={classes}
      onClick={!isSelected ? () => selectInvoice(number) : null}
    >
      <div className={styles.invoiceEntry__firstRow}>
        <FavoriteButton
          isFavorite={isFavorite}
          click={() => openDialog(isFavorite ? "remove" : "assign")}
        />
        <p>Invoice Number: {number} </p>
      </div>
      <div className={styles.invoiceEntry__secondRow}>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default InvoiceListEntry;
