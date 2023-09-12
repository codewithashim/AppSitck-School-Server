import { Schema, model } from "mongoose";
import { HomeSliderModel, IHomeSlider } from "./homeslider.interface";

const HomeSliderSchema = new Schema<IHomeSlider>(
  {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    image: {
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

export const HomeSlider = model<IHomeSlider, HomeSliderModel>(
  "HomeSlider",
  HomeSliderSchema
);
