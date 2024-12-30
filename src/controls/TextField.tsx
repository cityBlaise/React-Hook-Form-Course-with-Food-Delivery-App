import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}
const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      type = "text",
      className = "",
      label = undefined,
      error,
      ...rest
    } = props;
    return (
      <div className={`${label ? "form-floating" : ""}`}>
        <input
          {...rest}
          ref={ref}
          type={type}
          className={`form-control ${className}`}
        />
        {label && <label>{label}</label>}
        {error && <div className="mt-1">{error.message}</div>}
      </div>
    );
  }
);

export default TextField;
