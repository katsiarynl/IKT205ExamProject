export type GeneralProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  restaurant?: string;
};

export interface Product extends GeneralProduct {
  image: string;
}
//https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript

export type CategorizedProducts = {
  category: string;
  allmeals: Product[];
};

export type ProductCategoryComponentType = {
  category: string;
  setCategory: React.Dispatch<any>;
  // products: string;
  // allmeals: CategorizedProducts[];
};

export type ScrollCategoriesComponentType = {
  menu: CategorizedProducts[];
  setCategory: React.Dispatch<any>;
};

export type ProductItemComponentType = {
  productobject: Product[];
};

export type PriceTagType = {
  price: number;
};
