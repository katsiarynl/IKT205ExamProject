export type GeneralRestaurant = {
  description?: string;
  name: string;
  // products: Product[];
};
//types

export interface RestaurantComponentType extends GeneralRestaurant {
  image: string;
}

export interface RestaurantItemComponentType extends RestaurantComponentType {
  address: string;
  rating: number;
}
