import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import "tailwindcss/tailwind.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./styles/mui-theme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
