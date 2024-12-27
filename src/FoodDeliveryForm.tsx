import {
  FieldErrors,
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import TextField from "./controls/TextField";
import getRenderCount from "./utils/getRenderCount";
import CheckoutForm from "./CheckoutFrom";
import { FoodDeliveryFormType } from "./types";


const RenderCount = getRenderCount();
export const FoodDeliveryForm = () => {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      mode: "onChange",
      defaultValues: {
        customerName: "",
        mobile: "",
        email: "",
        orderNumber: new Date().valueOf(),
        paymentMethod: "",
        deliveryIn: 0,
        // address: {
        //   streetAddress: "",
        //   landmark: "",
        //   city: "",
        //   state: "",
        // },
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

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
      <FormProvider {...methods}>
        <CheckoutForm />
      </FormProvider>
      <div className="text-start mt-4">Delivery addres</div>
      <div className="row my-2">
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
      <button type="submit" className="btn btn-primary ">
        Submit
      </button>
    </form>
  );
};
