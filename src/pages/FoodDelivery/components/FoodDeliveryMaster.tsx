import { useFormContext, useFormState } from "react-hook-form";
import TextField from "../../../controls/TextField";
import { FoodDeliveryMasteType } from "../../../types";
import getRenderCount from "../../../utils/getRenderCount";
const RenderCount = getRenderCount();

const FormDeliveryMaster = () => {
  const { register } = useFormContext<FoodDeliveryMasteType>();
  const { errors } = useFormState<FoodDeliveryMasteType>({
    name: ["orderNumber", "mobile", "customerName", "email"],
  });
  return (
    <div>
      <RenderCount />
      <div className="row mb-3">
        <div className="col">
          <TextField
            {...register("orderNumber", {
              required: "This field is required",
            })}
            label="#Order No."
            disabled
            error={errors.orderNumber}
          />
        </div>
        <div className="col">
          <TextField
            {...register("mobile", {
              required: "Mobile phone is required",
              minLength: {
                value: 9,
                message: "at least 9 caracters",
              },
            })}
            label="Mobile"
            error={errors.mobile}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextField
            {...register("customerName", {
              required: "Customer name is required",
            })}
            label="Customer Name"
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <TextField
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            label="Email"
            error={errors.email}
          />
        </div>
      </div>
    </div>
  );
};

export default FormDeliveryMaster;
