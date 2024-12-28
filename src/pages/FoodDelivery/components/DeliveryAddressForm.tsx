import { useFormContext } from "react-hook-form";
import { DeliveryFormType } from "../../../types";
import TextField from "../../../controls/TextField";

const DeliveryAddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<DeliveryFormType>();
  return (
    <div>
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
