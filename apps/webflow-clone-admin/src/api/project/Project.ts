import { Page } from "../page/Page";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  pages?: Array<Page>;
};
