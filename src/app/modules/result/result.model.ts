import { Schema, model } from "mongoose";
import { ResultModel, IResult } from "./result.interface";

const ResultSchema = new Schema<IResult>(
  {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    pbulishDate: {
      type: String,
    },
    file: {
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

export const Result = model<IResult, ResultModel>("Result", ResultSchema);
