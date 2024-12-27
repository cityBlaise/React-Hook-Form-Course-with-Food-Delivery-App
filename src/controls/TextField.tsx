import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}
const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", className = "", label, error, ...rest } = props;
    return (
      <div className="form-floating">
        <input
          ref={ref}
          type={type}
          className={`form-control ${className}`}
          {...rest}
        />
        <label>{label}</label>
        {error && <div>{error.message}</div>}
      </div>
    );
  }
);

export default TextField;
