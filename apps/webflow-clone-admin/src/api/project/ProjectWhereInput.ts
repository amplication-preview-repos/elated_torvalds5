import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pages?: PageListRelationFilter;
};
