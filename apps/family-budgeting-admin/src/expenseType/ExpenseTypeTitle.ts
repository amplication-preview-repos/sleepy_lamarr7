import { ExpenseType as TExpenseType } from "../api/expenseType/ExpenseType";

export const EXPENSETYPE_TITLE_FIELD = "name";

export const ExpenseTypeTitle = (record: TExpenseType): string => {
  return record.name?.toString() || String(record.id);
};
