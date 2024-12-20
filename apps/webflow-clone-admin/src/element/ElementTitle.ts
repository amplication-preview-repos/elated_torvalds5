import { Element as TElement } from "../api/element/Element";

export const ELEMENT_TITLE_FIELD = "parentElement";

export const ElementTitle = (record: TElement): string => {
  return record.parentElement?.toString() || String(record.id);
};
