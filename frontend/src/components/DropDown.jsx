import { useContext, useState } from "react";
import { Button } from "./ui/stateful-button";
import InputFieldContext from "../context/InputFieldContext";

function DropDown() {
  const {
    setVariant,
    setSize,
    setMode,
  } = useContext(InputFieldContext);

  const [localVariant, setLocalVariant] = useState("outlined");
  const [localSize, setLocalSize] = useState("md");
  const [localMode, setLocalMode] = useState("preview");

  const handleExecute = async () => {

    await new Promise((resolve) => setTimeout(resolve,1000));
    setVariant(localVariant);
    setSize(localSize);
    setMode(localMode);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-box shadow-xl mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Variant */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Variant</span>
          </label>
          <select
            className="select select-bordered"
            value={localVariant}
            onChange={(e) => setLocalVariant(e.target.value)}
          >
            <option value="filled">Filled</option>
            <option value="outlined">Outlined</option>
            <option value="ghost">Ghost</option>
          </select>
        </div>

        {/* Size */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <select
            className="select select-bordered"
            value={localSize}
            onChange={(e) => setLocalSize(e.target.value)}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>

        {/* Mode */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mode</span>
          </label>
          <select
            className="select select-bordered"
            value={localMode}
            onChange={(e) => setLocalMode(e.target.value)}
          >
            <option value="preview">Preview</option>
            <option value="interactive">Interactive</option>
          </select>
        </div>
      </div>

      {/* Execute Button */}
      <div className="flex justify-center mt-4">
        <Button
          className="bg-blue-500 hover:ring-blue-500"
          onClick={handleExecute}
        >
          Execute
        </Button>
      </div>
    </div>
  );
}

export default DropDown;
