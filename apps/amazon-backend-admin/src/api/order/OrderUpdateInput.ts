import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderNumber?: string | null;
  paymentStatus?: boolean | null;
  paymentintent?: string | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: InputJsonValue;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
