import { InputJsonValue } from "../../types";
import { ElementCreateNestedManyWithoutPagesInput } from "./ElementCreateNestedManyWithoutPagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageCreateInput = {
  content?: InputJsonValue;
  elements?: ElementCreateNestedManyWithoutPagesInput;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};
