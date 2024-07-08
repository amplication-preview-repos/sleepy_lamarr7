import { Expense } from "../expense/Expense";

export type ExpenseType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  expenses?: Array<Expense>;
};
