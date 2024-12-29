import { useFormContext, useFormState } from "react-hook-form";
import { DeliveryFormType } from "../../../types";
import TextField from "../../../controls/TextField";
import getRenderCount from "../../../utils/getRenderCount";
const RenderCount = getRenderCount();

const DeliveryAddressForm = () => {
  const { register } = useFormContext<DeliveryFormType>();
  const { errors } = useFormState<DeliveryFormType>({
    name: [
      "address.city",
      "address.landmark",
      "address.state",
      "address.streetAddress",
    ],
    exact: true,
  });
  return (
    <div>
      <RenderCount />
      <div className="text-start mb-2">Delivery addres</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street Address"
            {...register("address.streetAddress", {
              required: "This field is required",
            })}
            error={errors.address?.streetAddress}
          />
        </div>
        <div className="col">
          <TextField
            label="City"
            {...register("address.city", {
              required: "This field is required",
            })}
            error={errors.address?.city}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <TextField
            label="Landmark"
            {...register("address.landmark", {
              required: "This field is required",
            })}
            error={errors.address?.landmark}
          />
        </div>
        <div className="col">
          <TextField
            label="State"
            {...register("address.state", {
              required: "This field is required",
            })}
            error={errors.address?.state}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
