import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderNumber?: string | null;
  paymentStatus?: boolean | null;
  paymentintent?: string | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status?: InputJsonValue;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
