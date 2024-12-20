import { Page } from "../page/Page";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  pages?: Array<Page>;
  updatedAt: Date;
};
