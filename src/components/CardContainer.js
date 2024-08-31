import React, { useState } from "react";
import styles from "../styles/Components.module.scss";
import CustomInput from "./UI/CustomInput";
import Icon from "./Icon";
import CustomDialog from "./UI/CustomDialog";

function CardContainer(props) {
  const inputStyle = {
    "& .MuiOutlinedInput-input": {
      padding: "0.2rem",
    },
  };

  const { children, title, toolbar, info } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.cardTitle}>{title}</h2>
          {toolbar && toolbar.search && (
            <CustomInput
              sx={inputStyle}
              wrapperStyle={{ margin: 0 }}
              placeholder="Search invoice"
              onChange={(e) => toolbar.search.method(e.target.value)}
              startAdornment="search"
            />
          )}
          {info && (
            <div className={styles.info}>
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
