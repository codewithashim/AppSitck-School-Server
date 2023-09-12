import { Model } from "mongoose";

export type IAbout = {
  image: string;
  title: string;
  subtitle: string;
  details: string;
};

export type AboutModel = Model<IAbout, Record<string, unknown>>;
