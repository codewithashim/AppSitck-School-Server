import { Schema, model } from "mongoose";
import { StatisticModel, IStatistic, IOrganizationStatistic, OrganizationStatisticModel } from "./statistic.interface";

const OrganizationStatisticSchema = new Schema<IOrganizationStatistic>(
  {
    title: {
      type: String,
    },
    counte: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const StatisticSchema = new Schema<IStatistic>(
  {
    title: {
      type: String,
    },
    counte: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const OrganizationStatistic = model<IOrganizationStatistic, OrganizationStatisticModel>(
  "OrganizationStatistic",
  OrganizationStatisticSchema
);

export const Statistic = model<IStatistic, StatisticModel>(
  "Statistic",
  StatisticSchema
);
