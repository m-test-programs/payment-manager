import React from "react";
import { Button } from "@mui/material";

function CustomButton(props) {
  const { title, color, disabled, fullWidth, click, key } = props;
  return (
    <Button
      key={key}
      color={color || "secondary"}
      variant="contained"
      size="small"
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={click}
      sx={{ marginTop: "0.8rem" }}
    >
      {title}
    </Button>
  );
}

export default CustomButton;
