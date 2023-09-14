import { Model } from "mongoose";

export type IOrganizationStatistic = {
  title: string;
  counte: string;
};

export type IStatistic = {
  title: string;
  counte: string;
};

export type OrganizationStatisticModel = Model<IOrganizationStatistic, Record<string, unknown>>;

export type StatisticModel = Model<IStatistic, Record<string, unknown>>;
