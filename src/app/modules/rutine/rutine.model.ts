import { Schema, model } from "mongoose";
import { RutineModel, IRutine } from "./rutine.interface";

const RutineSchema = new Schema<IRutine>(
  {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    class: {
      type: String,
    },
    pbulishDate: {
      type: String,
    },
    file: {
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

export const Rutine = model<IRutine, RutineModel>("Rutine", RutineSchema);
