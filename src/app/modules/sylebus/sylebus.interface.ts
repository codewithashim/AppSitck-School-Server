import { Model } from "mongoose";

export type ISylebus = {
  title: string;
  details: string;
  pbulishDate: string;
  class: string;
  file: string;
};

export type SylebusModel = Model<ISylebus, Record<string, unknown>>;
