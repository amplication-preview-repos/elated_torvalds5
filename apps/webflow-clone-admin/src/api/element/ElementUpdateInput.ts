import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ElementUpdateInput = {
  page?: PageWhereUniqueInput | null;
  parentElement?: string | null;
  properties?: InputJsonValue;
  typeField?: string | null;
};
