import { JsonFilter } from "../../util/JsonFilter";
import { ElementListRelationFilter } from "../element/ElementListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PageWhereInput = {
  content?: JsonFilter;
  elements?: ElementListRelationFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  title?: StringNullableFilter;
};
