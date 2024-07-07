import { JsonValue } from "type-fest";
import { Project } from "../project/Project";
import { Element } from "../element/Element";

export type Page = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: JsonValue;
  project?: Project | null;
  elements?: Array<Element>;
};
