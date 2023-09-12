import { Model } from "mongoose";

export type IHeader = {
  logo: string;
  schoolName: string;
  estdSince: string;
  schoolAddress: string;
  email : string;
  phone : string;
};

export type HeaderModel = Model<IHeader, Record<string, unknown>>;
