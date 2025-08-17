import { useContext, useState } from "react";
import InputField from "./InputField";
import InputFieldContext from "../context/InputFieldContext";

function InteractiveMode() {
  const { variant, size } = useContext(InputFieldContext); 

  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const validateInput = () => {
    return value.includes("@");
  };

  const handleSubmit = async () => {
    if (!validateInput()) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    setDisabled(true);
    setLoading(true);

    await new Promise((res) => setTimeout(res, 3000));

    setLoading(false);
    setDisabled(false);
    alert("Submitted successfully!");
  };

  // Map input size to button size
  const buttonSizeClass = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[size];

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <div className="flex flex-col sm:flex-row gap-4 items-end">
        {/* Input Field */}
        <div className="flex-1">
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            helperText="Enter a valid email address"
            errorMessage="Please enter a valid email with @"
            invalid={invalid}
            loading={loading}
            disabled={disabled}
            variant={variant}
            size={size}
          />
        </div>

        {/* Submit Button beside input */}
        <div className="mb-1 sm:mb-6">
          <button
            onClick={handleSubmit}
            disabled={loading || disabled}
            className={`rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 ${buttonSizeClass}`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InteractiveMode;