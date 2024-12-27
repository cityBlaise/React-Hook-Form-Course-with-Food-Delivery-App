import { FieldErrors, useForm } from "react-hook-form";
import getRenderCount from "./utils/getRenderCount";
import TextField from "./controls/TextField";
import SelectField from "./controls/SelectField";
import { SelectOptionType } from "./types";

type FoodDeliveryFormType = {
  customerName: string;
  orderNumber: number;
  email: string;
  mobile: string;
  paymentMethod: string;
  deliveryIn: number;
};

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
const RenderCount = getRenderCount();
export const FoodDeliveryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    defaultValues: {
      customerName: "",
      mobile: "",
      email: "",
      orderNumber: new Date().valueOf(),
      paymentMethod: "",
      deliveryIn: 0,
    },
  });

  const onSubmit = (data: FoodDeliveryFormType) => {
    console.log(data);
  };
  const onError = (erros: FieldErrors<FoodDeliveryFormType>) => {
    console.log(erros);
  };
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <RenderCount />
      <div className="row my-4">
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
      <div className="row mb-4">
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
      <div>list of ordered fodd items</div>
      <div className="row mb-2">
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
            label="Payment Method"
            {...register("deliveryIn", {
              required: "This field is required",
            })}
            error={errors.deliveryIn}
          />
        </div>
      </div>
      <div>delivery addres</div>
      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
};
