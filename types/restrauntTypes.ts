export type GeneralRestaurant = {
  description?: string;
  name: string;
  // products: Product[];
};

export interface RestaurantComponentType extends GeneralRestaurant {
  image: string;
}

export interface RestaurantItemComponentType extends RestaurantComponentType {
  address: string;
  rating: number;
}
