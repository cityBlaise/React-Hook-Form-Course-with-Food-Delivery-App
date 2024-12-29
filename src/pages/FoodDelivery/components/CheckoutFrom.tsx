import { useFormContext, useFormState } from "react-hook-form";
import SelectField from "../../../controls/SelectField";
import { SelectOptionType, CheckoutFormType } from "../../../types";
import getRenderCount from "../../../utils/getRenderCount";

const paymentOptions: SelectOptionType<string>[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Pay Online" },
  { value: "COD", text: "Cash on Delivery" },
];
const deliveryInOptions: SelectOptionType<number | string>[] = [
  { value: "", text: "Select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];
const RenderCount = getRenderCount();

const CheckoutForm = () => {
  const { register } = useFormContext<CheckoutFormType>();
  const { errors } = useFormState<CheckoutFormType>({
    name: ["deliveryIn", "paymentMethod"],
  });
  return (
    <div>
      <RenderCount /> 
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
          <SelectField<number | string>
            defaultValue={""}
            options={deliveryInOptions}
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
