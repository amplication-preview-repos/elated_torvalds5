import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { ElementCreateNestedManyWithoutPagesInput } from "./ElementCreateNestedManyWithoutPagesInput";

export type PageCreateInput = {
  title?: string | null;
  content?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
  elements?: ElementCreateNestedManyWithoutPagesInput;
};
