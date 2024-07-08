import { Period as TPeriod } from "../api/period/Period";

export const PERIOD_TITLE_FIELD = "id";

export const PeriodTitle = (record: TPeriod): string => {
  return record.id?.toString() || String(record.id);
};
