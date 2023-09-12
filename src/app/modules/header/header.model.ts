import { Schema, model } from "mongoose";
import { HeaderModel, IHeader } from "./header.interface";

const HeaderSchema = new Schema<IHeader>(
  {
    logo: {
      type: String,
      required: true,
    },
    schoolName: {
      type: String,
    },
    estdSince: {
      type: String,
    },
    schoolAddress: {
      type: String,
    },
    email: {
      type: String,
    },
    phone:{
      type: String,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Header = model<IHeader, HeaderModel>("Header", HeaderSchema);
