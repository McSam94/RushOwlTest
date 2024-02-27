import { forwardRef, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
