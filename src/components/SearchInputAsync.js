import {
  Autocomplete,
  CircularProgress,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Icon from "./UI/Icon";
import axios from "axios";
import useStore from "../store/store";

// Built on AutocompleteAsync Mui Component, please see documentation: https://mui.com/material-ui/react-autocomplete/

function SearchInputAsync(props) {
  const {
    optionLabel,
    optionKey,
    onInputChange,
    placeholder,
    inputStyle,
    renderOptionComponent,
    endpoint,
    useObjectAsValue,
  } = props;

  const RenderedComponent = renderOptionComponent;

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const setConnectionError = useStore((store) => store.setConnectionError);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/${endpoint}`
        );

        if (active) {
          setOptions([...data]);
        }
      } catch (err) {
        setConnectionError(true, err);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div>
      <Autocomplete
        options={options}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        loading={loading}
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
        onChange={(e, value) =>
          value && onInputChange(useObjectAsValue ? value : value[optionKey])
        }
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
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
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

export default SearchInputAsync;
