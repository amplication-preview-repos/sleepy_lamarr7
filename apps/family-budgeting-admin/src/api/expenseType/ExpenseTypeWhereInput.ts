import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";

export type ExpenseTypeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
};
