import { Schema, model } from "mongoose";
import { LogoModel, ILogo } from "./logo.interface";

const LogoSchema = new Schema<ILogo>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
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

export const Logo = model<ILogo, LogoModel>("Logo", LogoSchema);
