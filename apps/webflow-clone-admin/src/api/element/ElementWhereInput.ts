import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageWhereUniqueInput } from "../page/PageWhereUniqueInput";

export type ElementWhereInput = {
  id?: StringFilter;
  properties?: JsonFilter;
  typeField?: StringNullableFilter;
  parentElement?: StringNullableFilter;
  page?: PageWhereUniqueInput;
};
