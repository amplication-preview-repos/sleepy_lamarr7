import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PeriodWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
};
