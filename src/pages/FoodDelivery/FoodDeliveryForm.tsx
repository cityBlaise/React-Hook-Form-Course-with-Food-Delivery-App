import {
  FieldErrors,
  FormProvider,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { FoodDeliveryFormType } from "../../types";
import getRenderCount from "../../utils/getRenderCount";
import CheckoutForm from "./components/CheckoutFrom";
import DeliveryAddressForm from "./components/DeliveryAddressForm";
import FormDeliveryMaster from "./components/MasterFoodDeliveryForm";
import OrderedFoodItem from "./components/OrderedFoodItem";
import SubmitButton from "../../controls/SubmitButton";

const RenderCount = getRenderCount();
export const FoodDeliveryForm = () => {
  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      mode: "onChange",
      defaultValues: {
        customerName: "",
        mobile: "",
        email: "",
        foodItems: [{ name: "", quantity: 0 }],
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

  const { handleSubmit, control } = methods;

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

      <FormProvider {...methods}>
        <div className="row row-gap-4 my-4">
          <FormDeliveryMaster />
          <OrderedFoodItem />
          <CheckoutForm />
          <DeliveryAddressForm />
        </div>
      </FormProvider>
      <SubmitButton value={"Submit"} control={control} />
    </form>
  );
};
