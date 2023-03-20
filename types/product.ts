export type Product = {
  name: string;
  price: number;
  description: string;
  _id?: string;
};
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
