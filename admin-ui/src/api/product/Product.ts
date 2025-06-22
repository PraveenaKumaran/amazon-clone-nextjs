import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  image: JsonValue;
  isActive: boolean | null;
  order?: Order | null;
  price: number;
  reviews?: Array<Review>;
  stock: number | null;
  title: string;
  updatedAt: Date;
  varients: JsonValue;
};
