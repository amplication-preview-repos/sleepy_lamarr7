import { ExpenseTypeWhereUniqueInput } from "../expenseType/ExpenseTypeWhereUniqueInput";

export type ExpenseUpdateInput = {
  amount?: number | null;
  description?: string | null;
  date?: Date | null;
  typeField?: string | null;
  expenseType?: ExpenseTypeWhereUniqueInput | null;
};
