export type Product = {
  name: string;
  price: number;
  description: string;
  _id: string;
};
export type Category = {
  category: string;
  allmeals: Product[];
};

export type ProductCategoryComponentType = {
  category: string;
  setProducts: React.Dispatch<string>;
  products: string;
  allmeals: Product[];
};

export type ScrollCategoriesComponent = {
  menu: Category[];
};
