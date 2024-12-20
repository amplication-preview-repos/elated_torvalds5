import { JsonValue } from "type-fest";
import { Element } from "../element/Element";
import { Project } from "../project/Project";

export type Page = {
  content: JsonValue;
  createdAt: Date;
  elements?: Array<Element>;
  id: string;
  project?: Project | null;
  title: string | null;
  updatedAt: Date;
};
