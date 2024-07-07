import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  pages?: PageListRelationFilter;
};
