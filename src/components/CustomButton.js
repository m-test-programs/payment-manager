import React from "react";
import { Button } from "@mui/material";

function CustomButton(props) {
  const { title, color, disabled } = props;
  return (
    <Button
      color={color || "secondary"}
      variant="contained"
      size="small"
      disabled={disabled}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
