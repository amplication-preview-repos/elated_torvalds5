import { PageUpdateManyWithoutProjectsInput } from "./PageUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  pages?: PageUpdateManyWithoutProjectsInput;
};
