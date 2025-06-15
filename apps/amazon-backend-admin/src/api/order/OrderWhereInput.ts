import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  paymentStatus?: BooleanNullableFilter;
  paymentintent?: StringNullableFilter;
  products?: ProductListRelationFilter;
  status?: JsonFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
