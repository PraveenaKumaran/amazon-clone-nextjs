import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: number;
  image: InputJsonValue;
  isActive?: boolean | null;
  order?: OrderWhereUniqueInput | null;
  price: number;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  stock?: number | null;
  title: string;
  varients: InputJsonValue;
};
