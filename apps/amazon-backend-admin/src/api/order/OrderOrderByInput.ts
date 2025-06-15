import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderNumber?: SortOrder;
  paymentStatus?: SortOrder;
  paymentintent?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
