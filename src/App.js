import React from "react";
import { ThemeProvider } from "./helpers/theme";
import { GlobalStyle } from "./styles/Page";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <ThemeProvider>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};
