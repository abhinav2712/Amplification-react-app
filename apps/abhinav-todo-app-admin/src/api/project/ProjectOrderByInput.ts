import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  owners?: SortOrder;
  updatedAt?: SortOrder;
};
