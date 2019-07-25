import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./helpers/ThemeProvider";
import { GlobalStyle } from "./styles/global";
import { App } from "./App";

export const Portfolio = () => {
  return (
    <ThemeProvider>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<Portfolio />, document.getElementById("root"));
