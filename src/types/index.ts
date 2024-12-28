export type SelectOptionType<T> = {
  value: T;
  text: string;
};

export type FoodDeliveryFormType = FoodDeliveryMasteType &
  CheckoutFormType &
  DeliveryFormType;

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
export type FoodDeliveryMasteType = {
  customerName: string;
  orderNumber: number;
  email: string;
  mobile: string;
};
