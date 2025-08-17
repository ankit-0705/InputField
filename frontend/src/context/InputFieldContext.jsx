import { createContext } from "react";

const InputFieldContext = createContext({
  variant: "outlined",
  size: "md",
  mode: "preview",
  setVariant: () => {},
  setSize: () => {},
  setMode: () => {},
  setTheme: () => {},
});

export default InputFieldContext;
