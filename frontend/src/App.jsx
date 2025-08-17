import { useContext } from "react";
import {Navbar, Description, DropDown, PreviewMode, InteractiveMode} from './components';
import InputFieldState from "./context/InputFieldState";
import InputFieldContext from "./context/InputFieldContext";

function AppContent() {
  const { mode } = useContext(InputFieldContext);

  return (
    <>
      <Navbar />
      <Description />
      <DropDown />
      {mode === "preview" ? <PreviewMode /> : <InteractiveMode />}
    </>
  );
}

function App() {
  return (
    <InputFieldState>
      <AppContent />
    </InputFieldState>
  );
}

export default App;
