import { Model } from "mongoose";

export type ISylebus = {
  _id: any;
  title: string;
  details: string;
  pbulishDate: string;
  class: string;
  file: string;
};

export type SylebusModel = Model<ISylebus, Record<string, unknown>>;
