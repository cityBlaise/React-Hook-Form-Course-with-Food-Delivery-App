import { ForwardedRef, forwardRef, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { SelectOptionType } from "../types";

interface SelectFieldProps<T extends string | number | readonly string[]>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: FieldError;
  options?: SelectOptionType<T>[];
}

const SelectField = forwardRef(function SelectField<
  T extends string | number | readonly string[]
>(props: SelectFieldProps<T>, ref: ForwardedRef<HTMLSelectElement>) {
  const { options = [], className = "", label, error, ...rest } = props;
  return (
    <div className="form-floating">
      <select ref={ref} className={`form-select ${className}`} {...rest}>
        {options.map((option) => (
          <option key={String(option.value)} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <label>{label}</label>
      {error && <div>{error.message}</div>}
    </div>
  );
}) as <T extends string | number | readonly string[]>(
  props: SelectFieldProps<T> & { ref?: ForwardedRef<HTMLSelectElement> }
) => JSX.Element;
export default SelectField;
