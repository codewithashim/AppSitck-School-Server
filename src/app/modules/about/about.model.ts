import { Schema, model } from "mongoose";
import { AboutModel, IAbout } from "./about.interface";

const AboutSchema = new Schema<IAbout>(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const About = model<IAbout, AboutModel>("About", AboutSchema);
