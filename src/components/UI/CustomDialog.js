import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import CustomButton from "../CustomButton";

function CustomDialog(props) {
  const {
    onClose,
    selectedValue,
    open,
    title,
    titleStyle,
    titleAddon,
    titleAddonStyle,
    children,
    actions,
    errorMessage,
    fullWidth,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={fullWidth}>
      <DialogTitle>
        {" "}
        <span style={titleStyle}>{title}</span>{" "}
        {titleAddon && <span style={titleAddonStyle}>{titleAddon}</span>}
      </DialogTitle>
      <DialogContent>
        {errorMessage && (
          <Alert variant="filled" severity="error">
            {errorMessage}
          </Alert>
        )}
        {children}
      </DialogContent>
      <DialogActions>
        {!!actions &&
          actions.map((action) => (
            <CustomButton
              title={action.title}
              variant="contained"
              size={action.size || "small"}
              color={action.color}
              disabled={action.disabled}
              click={action.click}
              fullWidth={action.fullWidth}
            />
          ))}
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
