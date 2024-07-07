import { Element as TElement } from "../api/element/Element";

export const ELEMENT_TITLE_FIELD = "typeField";

export const ElementTitle = (record: TElement): string => {
  return record.typeField?.toString() || String(record.id);
};
