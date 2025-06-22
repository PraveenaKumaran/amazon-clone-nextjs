import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedPrice?: number;
  image?: InputJsonValue;
  isActive?: boolean | null;
  order?: OrderWhereUniqueInput | null;
  price?: number;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  stock?: number | null;
  title?: string;
  varients?: InputJsonValue;
};
