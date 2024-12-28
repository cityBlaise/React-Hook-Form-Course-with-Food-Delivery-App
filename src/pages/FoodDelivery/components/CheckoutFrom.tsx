import { useFormContext } from "react-hook-form";
import SelectField from "../../../controls/SelectField";
import { SelectOptionType, CheckoutFormType } from "../../../types";

const paymentOptions: SelectOptionType<string>[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Pay Online" },
  { value: "COD", text: "Cash on Delivery" },
];
const deliveryInOptions: SelectOptionType<number>[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];
const CheckoutForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();
  return (
    <div>
      <div className="text-start fw-bold mb-2">Checkout Details</div>
      <div className="row">
        <div className="col">
          <SelectField
            options={paymentOptions}
            defaultValue={""}
            label="Payment Method"
            {...register("paymentMethod", {
              required: "This field is required",
            })}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          <SelectField<number>
            options={deliveryInOptions}
            defaultValue={""}
            label="Delivery with"
            {...register("deliveryIn", {
              required: "This field is required",
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
