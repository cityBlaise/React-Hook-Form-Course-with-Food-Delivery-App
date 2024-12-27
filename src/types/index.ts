export type SelectOptionType<T> = {
  value: T;
  text: string;
};

export type FoodDeliveryFormType = {
  customerName: string;
  orderNumber: number;
  email: string;
  mobile: string;
  address: {
    streetAddress: string;
    landmark: string;
    city: string;
    state: string;
  };
} & CheckoutFormType;

export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};
