export type GeneralRestaurant = {
  description?: string;
  name: string;
  // products: Product[];
};

export interface RestrauntComponentType extends GeneralRestaurant {
  image: string;
}

export interface RestrauntItemComponentType extends GeneralRestaurant {
  key: number;

  address: string;
  rating: number;
  image: string;
}
