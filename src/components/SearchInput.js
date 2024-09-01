import { InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import Icon from "./Icon";

const customStyle = {
  backgroundColor: "var(--dark-soft)",
  color: "#FFF",
  "& .MuiOutlinedInput-input": {
    padding: "0.5rem !important",
  },
};

function SearchInput() {
  return (
    <div>
      <OutlinedInput
        placeholder="Search customer"
        fullWidth
        sx={customStyle}
        startAdornment={
          <InputAdornment position="start">
            <Icon icon="search" />
          </InputAdornment>
        }
      />
    </div>
  );
}

export default SearchInput;
