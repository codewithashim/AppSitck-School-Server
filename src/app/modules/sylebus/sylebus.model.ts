import { Schema, model } from "mongoose";
import { SylebusModel, ISylebus } from "./sylebus.interface";

const SylebusSchema = new Schema<ISylebus>(
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

export const Sylebus = model<ISylebus, SylebusModel>("Sylebus", SylebusSchema);
