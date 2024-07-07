import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { ElementListRelationFilter } from "../element/ElementListRelationFilter";

export type PageWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: JsonFilter;
  project?: ProjectWhereUniqueInput;
  elements?: ElementListRelationFilter;
};
