import { JsonValue } from "type-fest";
import { Page } from "../page/Page";

export type Element = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  properties: JsonValue;
  typeField: string | null;
  parentElement: string | null;
  page?: Page | null;
};
