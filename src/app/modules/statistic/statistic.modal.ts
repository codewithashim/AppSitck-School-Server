import { Schema, model } from "mongoose";
import { StatisticModel, IStatistic } from "./statistic.interface";

const StatisticSchema = new Schema<IStatistic>(
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

export const Statistic = model<IStatistic, StatisticModel>(
  "Statistic",
  StatisticSchema
);
