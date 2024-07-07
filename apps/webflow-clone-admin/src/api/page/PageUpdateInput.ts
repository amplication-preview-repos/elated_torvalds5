import { InputJsonValue } from "../../types";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { ElementUpdateManyWithoutPagesInput } from "./ElementUpdateManyWithoutPagesInput";

export type PageUpdateInput = {
  title?: string | null;
  content?: InputJsonValue;
  project?: ProjectWhereUniqueInput | null;
  elements?: ElementUpdateManyWithoutPagesInput;
};
