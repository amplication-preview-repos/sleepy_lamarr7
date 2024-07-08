import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IncomeWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  source?: StringNullableFilter;
};
