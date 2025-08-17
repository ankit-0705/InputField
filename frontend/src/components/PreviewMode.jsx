import { useContext } from "react";
import InputFieldContext from "../context/InputFieldContext";
import InputField from "./InputField";

function PreviewMode() {
  const { variant, size } = useContext(InputFieldContext);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mt-6">
      {/* Disabled Input */}
      <div className="space-y-2">
        <p className="font-medium">Disabled</p>
        <InputField
          label="Email"
          placeholder="Enter your email"
          helperText="This input is disabled"
          disabled={true}
          variant={variant}
          size={size}
        />
      </div>

      {/* Invalid Input */}
      <div className="space-y-2">
        <p className="font-medium">Invalid</p>
        <InputField
          label="Email"
          placeholder="Enter your email"
          errorMessage="Invalid email address"
          invalid={true}
          variant={variant}
          size={size}
        />
      </div>

      {/* Loading Input */}
      <div className="space-y-2">
        <p className="font-medium">Loading</p>
        <InputField
          label="Email"
          placeholder="Enter your email"
          helperText="Loading..."
          loading={true}
          disabled={true}
          variant={variant}
          size={size}
        />
      </div>
    </div>
  );
}

export default PreviewMode;
