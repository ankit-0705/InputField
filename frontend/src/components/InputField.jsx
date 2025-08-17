import clsx from "clsx";
import { useContext } from "react";
import InputFieldContext from "../context/InputFieldContext";

function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined",
  size = "md",
}) {
  const { theme } = useContext(InputFieldContext);

  // Common styling
  const baseClass =
    "w-full rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 transition-all";

  // Variant styles
  const variantClass = {
    filled: `bg-base-200 border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`,
    outlined: `bg-transparent border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`,
    ghost: "bg-transparent border-none focus:border focus:border-primary",
  }[variant];

  // Size styles
  const sizeClass = {
    sm: "text-sm py-1",
    md: "text-base py-2",
    lg: "text-lg py-3",
  }[size];

  // Error styling
  const errorClass = invalid
    ? "border-red-500 text-red-600 placeholder-red-400"
    : "";

  // Disabled or Loading styling
  const disabledClass =
    (disabled || loading)
      ? `${theme === "dark"
          ? "bg-base-100 text-base-content/40 border border-gray-700"
          : "bg-base-100 text-base-content/40 border border-gray-300"
        } cursor-not-allowed`
      : "";

  return (
    <div className="form-control w-full relative">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            baseClass,
            variantClass,
            sizeClass,
            errorClass,
            disabledClass
          )}
        />

        {/* Loading spinner */}
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <span className="loading loading-spinner loading-sm text-primary"></span>
          </div>
        )}
      </div>

      {/* Error or helper message */}
      {invalid && errorMessage ? (
        <label className="label">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </label>
      ) : (
        helperText && (
          <label className="label">
            <span className="label-text-alt">
              {loading ? "Loading..." : helperText}
            </span>
          </label>
        )
      )}
    </div>
  );
}

export default InputField;
