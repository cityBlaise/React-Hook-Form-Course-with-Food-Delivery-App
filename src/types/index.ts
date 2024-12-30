export type SelectOptionType<T> = {
  value: T;
  text: string;
};

export type FoodDeliveryFormType = MasterFoodDeliveryFormType &
  CheckoutFormType &
  DeliveryFormType & {
    foodItems: OrderedFoodItemType[];
  };

export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};
export type DeliveryFormType = {
  address: {
    streetAddress: string;
    landmark: string;
    city: string;
    state: string;
  };
};
export type MasterFoodDeliveryFormType = {
  customerName: string;
  orderNumber: number;
  email: string;
  mobile: string;
};
export type OrderedFoodItemType = { name: string; quantity: number };
