import { InputJsonValue } from "../../types";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ElementUpdateInput = {
  properties?: InputJsonValue;
  typeField?: string | null;
  parentElement?: string | null;
  page?: PageWhereUniqueInput | null;
};
