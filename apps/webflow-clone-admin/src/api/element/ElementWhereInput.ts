import { StringFilter } from "../../util/StringFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ElementWhereInput = {
  id?: StringFilter;
  page?: PageWhereUniqueInput;
  parentElement?: StringNullableFilter;
  properties?: JsonFilter;
  typeField?: StringNullableFilter;
};
