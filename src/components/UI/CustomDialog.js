import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import CustomButton from "../UI/CustomButton";
import Icon from "../UI/Icon";

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
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {" "}
        <span style={titleStyle}>{title}</span>{" "}
        {titleAddon && <span style={titleAddonStyle}>{titleAddon}</span>}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Icon icon="fa-xmark" />
      </IconButton>
      <DialogContent dividers>
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
              key={action.title}
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
