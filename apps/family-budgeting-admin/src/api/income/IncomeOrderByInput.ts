import { SortOrder } from "../../util/SortOrder";

export type IncomeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  amount?: SortOrder;
  source?: SortOrder;
};
