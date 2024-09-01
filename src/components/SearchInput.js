import {
  Autocomplete,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import Icon from "./Icon";

function SearchInput(props) {
  const {
    options,
    optionLabel,
    onInputChange,
    placeholder,
    inputStyle,
    renderOptionComponent,
  } = props;

  const RenderedComponent = renderOptionComponent;

  return (
    <div>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option[optionLabel]}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <RenderedComponent
              optionProps={optionProps}
              option={option}
              key={key}
            />
          );
        }}
        onInputChange={(e, value) => onInputChange(value)}
        fullWidth
        renderInput={(params) => (
          <FormControl variant="outlined" sx={inputStyle}>
            <TextField
              {...params}
              placeholder={placeholder}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="search" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </FormControl>
        )}
      />
    </div>
  );
}

export default SearchInput;
