import { ExpenseType } from "../expenseType/ExpenseType";

export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  description: string | null;
  date: Date | null;
  typeField: string | null;
  expenseType?: ExpenseType | null;
};
