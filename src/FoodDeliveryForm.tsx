import { FieldErrors, useForm } from "react-hook-form";
import getRenderCount from "./utils/getRenderCount";

type FoodDeliveryFormType = {
  customerName: string;
  orderNumber: number;
  email: string;
  mobile: string;
};
const RenderCount = getRenderCount();
export const FoodDeliveryForm = () => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      customerName: "",
      mobile: "",
      email: "",
      orderNumber: new Date().valueOf(),
    },
  });

  const onSubmit = (data: FoodDeliveryFormType) => {
    console.log(data);
  };
  const onError = (erros: FieldErrors<FoodDeliveryFormType>) => {
    console.log(erros);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
      <RenderCount />
      <div className="row my-4">
        <div className="col">
          <div className="form-floating">
            <input
              {...register("orderNumber", {
                required: "#Order No. is required",
              })}
              type="text"
              className="form-control"
              placeholder="#Order No."
              disabled
            />
            <label>#Order No.</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              {...register("mobile", {
                required: "Mobile phone is required",
              })}
              type="text"
              className="form-control"
              placeholder="Mobile"
            />
            <label>Mobile</label>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div className="form-floating">
            <input
              {...register("customerName", {
                required: "Customer name is required",
              })}
              type="text"
              className="form-control"
              placeholder="Customer Name"
            />
            <label>Customer Name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="text"
              className="form-control"
              placeholder="johndoe@gmail.com"
            />
            <label>Email</label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
};
