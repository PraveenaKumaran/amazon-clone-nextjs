import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isActive?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  varients?: SortOrder;
};
