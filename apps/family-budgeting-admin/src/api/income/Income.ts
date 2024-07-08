export type Income = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  amount: number | null;
  source: string | null;
};
