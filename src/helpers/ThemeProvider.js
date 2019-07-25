import React, { useState } from "react";
import { themes } from "../styles/themes";

export const ThemeContext = React.createContext();
export const ToggleThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const toggledTheme = theme === themes.light ? theme.dark : theme.light;
    setTheme(toggledTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
