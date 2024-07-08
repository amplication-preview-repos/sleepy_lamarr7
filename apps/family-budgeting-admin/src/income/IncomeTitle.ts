import { Income as TIncome } from "../api/income/Income";

export const INCOME_TITLE_FIELD = "source";

export const IncomeTitle = (record: TIncome): string => {
  return record.source?.toString() || String(record.id);
};
