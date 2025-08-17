import { useState, useEffect } from "react";
import InputFieldContext from "./InputFieldContext";

const InputFieldState = ({ children }) => {
  const [variant, setVariant] = useState("outlined");
  const [size, setSize] = useState("md");
  const [mode, setMode] = useState("preview");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  },[theme]);

  return (
    <InputFieldContext.Provider
      value={{
        variant,
        setVariant,
        size,
        setSize,
        mode,
        setMode,
        theme,
        setTheme
      }}
    >
      {children}
    </InputFieldContext.Provider>
  );
};

export default InputFieldState;
