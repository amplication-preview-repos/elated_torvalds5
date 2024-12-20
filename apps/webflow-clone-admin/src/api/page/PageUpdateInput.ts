import { InputJsonValue } from "../../types";
import { ElementUpdateManyWithoutPagesInput } from "./ElementUpdateManyWithoutPagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type PageUpdateInput = {
  content?: InputJsonValue;
  elements?: ElementUpdateManyWithoutPagesInput;
  project?: ProjectWhereUniqueInput | null;
  title?: string | null;
};
