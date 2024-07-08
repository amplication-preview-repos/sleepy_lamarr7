import { ExpenseUpdateManyWithoutExpenseTypesInput } from "./ExpenseUpdateManyWithoutExpenseTypesInput";

export type ExpenseTypeUpdateInput = {
  name?: string | null;
  description?: string | null;
  expenses?: ExpenseUpdateManyWithoutExpenseTypesInput;
};
