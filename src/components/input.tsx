import { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

type InputProps = {
  label: string;
  className?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div className={classNames(className, "flex flex-col")}>
        <label htmlFor="input" className="text-sm font-semibold text-gray-600">
          {label}
        </label>
        <input
          ref={ref}
          type="text"
          id="input"
          className={classNames(
            "px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100",
            {
              "border-red-500": error,
            }
          )}
          {...props}
        />
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
