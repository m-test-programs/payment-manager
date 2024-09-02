import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import styles from "../../styles/Forms.module.scss";
import Icon from "../UI/Icon";
function CustomInput(props) {
  const {
    label,
    onChange,
    onBlur,
    type,
    value,
    min,
    max,
    sx,
    wrapperStyle,
    placeholder,
    startAdornment,
  } = props;

  const customStyle = {
    width: "100%",
    "& .MuiOutlinedInput-input": {
      padding: "0.5rem",
      width: "100%",
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.8rem",
      marginTop: !value ? "-5px" : "",
    },
  };

  return (
    <div className={styles.inputWrapper} style={wrapperStyle}>
      <FormControl variant="outlined" sx={{ ...customStyle, ...sx }}>
        {label && <InputLabel>{label}</InputLabel>}
        <OutlinedInput
          onChange={onChange}
          placeholder={placeholder}
          startAdornment={
            startAdornment && (
              <InputAdornment position="start">
                <Icon icon={startAdornment} />
              </InputAdornment>
            )
          }
          onBlur={onBlur}
          type={type}
          label={label}
          value={value}
          inputProps={{
            min: min,
            max: max,
          }}
        />
      </FormControl>
    </div>
  );
}

export default CustomInput;
