import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PrismaneProvider, PRISMANE_COLORS, fr } from "@prismane/core";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const theme = {
  colors: {
    primary: PRISMANE_COLORS.ruby,
    base: PRISMANE_COLORS.coal,
  },
  spacing: "6px",
  borderRadius: {
    xs: fr(0.25),
    sm: fr(0.5),
    base: fr(0.75),
    md: fr(1.25),
    lg: fr(1.75),
    xl: fr(2.25),
    "2xl": fr(2.75),
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrismaneProvider theme={theme}>
      <App />
    </PrismaneProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
