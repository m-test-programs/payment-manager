import React, { useState } from "react";
import styles from "../styles/Components.module.scss";
import Icon from "./UI/Icon";
import CustomDialog from "./UI/CustomDialog";
import { Box } from "@mui/material";
import useStore from "../store/store";

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchInput from "./SearchInput";

function ListOption(props) {
  const { optionProps, option, key } = props;

  return (
    <Box
      key={key}
      component="li"
      {...optionProps}
      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
    >
      <FontAwesomeIcon icon={option.invoice_assigned ? fullStar : emptyStar} />
      {option.invoice_number}
    </Box>
  );
}

function CardContainer(props) {
  const inputStyle = {
    width: "100%",
    "& .MuiInputBase-root": {
      padding: "0.2rem",
      paddingLeft: "0.5rem",
    },
    "& .MuiInputBase-input": {
      padding: "0.2rem !important",
    },

    "& .MuiInputLabel-root": {
      fontSize: "0.8rem",
    },
  };

  const { children, title, toolbar, info } = props;

  const invoices = useStore((store) => store.fetchedInvoices);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__titleWrapper}>
          <h2 className={styles.card__cardTitle}>{title}</h2>
          {toolbar && toolbar.search && (
            <div className={styles.card__input}>
              <SearchInput
                options={invoices}
                optionLabel="invoice_number"
                onInputChange={toolbar.search.method}
                placeholder="Search Invoice"
                inputStyle={inputStyle}
                renderOptionComponent={ListOption}
              />
            </div>
          )}
          {info && (
            <div className={styles.card__info}>
              <Icon
                icon="circle-info"
                sx={{ cursor: "pointer" }}
                click={() => setOpen(true)}
              />
            </div>
          )}
        </div>
        {children}
      </div>
      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        title={info && `About ${info.title}`}
        actions={[{ click: () => setOpen(false), title: "Close" }]}
      >
        {info && info.text}
      </CustomDialog>
    </>
  );
}

export default CardContainer;
