import { Model } from "mongoose";

export type IStatistic = {
  title: string;
  counte: string;
};

export type StatisticModel = Model<IStatistic, Record<string, unknown>>;
