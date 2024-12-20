import { Page } from "../page/Page";
import { JsonValue } from "type-fest";

export type Element = {
  createdAt: Date;
  id: string;
  page?: Page | null;
  parentElement: string | null;
  properties: JsonValue;
  typeField: string | null;
  updatedAt: Date;
};
