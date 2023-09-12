import { Model } from "mongoose";

export type ILogo = {
  title: string;
  image: string;
};

export type LogoModel = Model<ILogo, Record<string, unknown>>;
