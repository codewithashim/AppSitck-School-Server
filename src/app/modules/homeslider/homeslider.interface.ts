import { Model } from "mongoose";

export type IHomeSlider = {
  title: string;
  details: string;
  image: string;
};

export type HomeSliderModel = Model<IHomeSlider, Record<string, unknown>>;
