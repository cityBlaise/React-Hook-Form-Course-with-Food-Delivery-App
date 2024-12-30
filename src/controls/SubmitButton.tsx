import { Control, useFormState } from "react-hook-form";

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  control?: Control<any, any>;
}; 
export default function SubmitButton(props: SubmitButtonProps) {
  const { control, className = "btn-light", value, ...other } = props;
  let isSubmitting = undefined;
  if (control) {
    ({ isSubmitting } = useFormState({ control }));
  }
  return (
    <>
      <button
        type="submit"
        className={`btn ${className}`}
        disabled={isSubmitting == undefined ? false : isSubmitting}
        {...other}
      >
        {isSubmitting === undefined || isSubmitting === false ? (
          value
        ) : (
          <>
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status" className="ms-1">
              {value}
            </span>
          </>
        )}
      </button>
    </>
  );
}
