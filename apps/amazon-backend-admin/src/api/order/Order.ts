import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderNumber: string | null;
  paymentStatus: boolean | null;
  paymentintent: string | null;
  products?: Array<Product>;
  status: JsonValue;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
