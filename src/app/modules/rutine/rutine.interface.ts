import { Model, Types } from "mongoose";

export type IRutine = {
  _id: any;
  title: string;
  details: string;
  pbulishDate: string;
  class: string;
  file: string;
};

export type RutineModel = Model<IRutine, Record<string, unknown>>;
