import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import { OrderedFoodItemType } from "../../../types";
import TextField from "../../../controls/TextField";

const OrderedFoodItem = () => {
  const { register } = useFormContext<{ foodItems: OrderedFoodItemType[] }>();
  const { errors } = useFormState<{ foodItems: OrderedFoodItemType[] }>({
    name: "foodItems",
  });
  const { fields } = useFieldArray<{ foodItems: OrderedFoodItemType[] }>({
    name: "foodItems",
  });
  return (
    <table className="table table-borderless table-hover">
      <thead>
        <tr>
          <th>Food</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) => (
          <tr key={field.id}>
            <td>
              <TextField
                error={errors.foodItems && errors.foodItems[index]?.name}
                {...register(`foodItems.${index}.name` as const, {
                  required: "This field is required",
                })}
              />
            </td>
            <td>
              <TextField
                type="number"
                min={0}
                error={errors.foodItems && errors.foodItems[index]?.quantity}
                {...register(`foodItems.${index}.quantity` as const, {
                  required: "This field is required",
                })}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderedFoodItem;
