import { ExpenseCreateNestedManyWithoutExpenseTypesInput } from "./ExpenseCreateNestedManyWithoutExpenseTypesInput";

export type ExpenseTypeCreateInput = {
  name?: string | null;
  description?: string | null;
  expenses?: ExpenseCreateNestedManyWithoutExpenseTypesInput;
};
