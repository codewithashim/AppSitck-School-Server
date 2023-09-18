import { Model } from "mongoose";

export type IResult = {
  _id: any;
  title: string;
  details: string;
  pbulishDate: string;
  class: string;
  file: string;
};

export type ResultModel = Model<IResult, Record<string, unknown>>;
