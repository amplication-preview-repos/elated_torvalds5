import { PageCreateNestedManyWithoutProjectsInput } from "./PageCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  pages?: PageCreateNestedManyWithoutProjectsInput;
};
