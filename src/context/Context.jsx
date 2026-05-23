import React, { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const contextValue = { theme, toogleTheme };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
export default Context;
