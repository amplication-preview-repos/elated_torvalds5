import { SortOrder } from "../../util/SortOrder";

export type ElementOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  properties?: SortOrder;
  typeField?: SortOrder;
  parentElement?: SortOrder;
  pageId?: SortOrder;
};
