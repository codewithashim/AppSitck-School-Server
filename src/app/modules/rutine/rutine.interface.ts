import { Model } from "mongoose";

export type IRutine = {
  title: string;
  details: string;
  pbulishDate: string;
  class: string;
  file: string;
};

export type RutineModel = Model<IRutine, Record<string, unknown>>;
