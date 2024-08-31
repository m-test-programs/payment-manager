import React from "react";
import { Button } from "@mui/material";

function CustomButton(props) {
  const { title, color, disabled, fullWidth, click } = props;
  return (
    <Button
      color={color || "secondary"}
      variant="contained"
      size="small"
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={click}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
