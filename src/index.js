import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  faCoffee,
  faDollar,
  faBell,
  faGear,
  faChevronLeft,
  faSearch,
  faEnvelope,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCoffee,
  faDollar,
  faBell,
  faGear,
  faChevronLeft,
  faSearch,
  faEnvelope,
  faCalendar
);

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    secondary: {
      main: "#2c2f36",
    },
    error: {
      main: "#eb2d3a",
    },
    info: {
      main: "#ffff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
