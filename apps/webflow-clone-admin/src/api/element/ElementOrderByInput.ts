import { SortOrder } from "../../util/SortOrder";

export type ElementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pageId?: SortOrder;
  parentElement?: SortOrder;
  properties?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
