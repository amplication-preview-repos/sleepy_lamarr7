import { ExpenseTypeWhereInput } from "./ExpenseTypeWhereInput";
import { ExpenseTypeOrderByInput } from "./ExpenseTypeOrderByInput";

export type ExpenseTypeFindManyArgs = {
  where?: ExpenseTypeWhereInput;
  orderBy?: Array<ExpenseTypeOrderByInput>;
  skip?: number;
  take?: number;
};
