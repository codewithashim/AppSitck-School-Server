import { Schema, model } from "mongoose";
import { NoticeModel, INotice } from "./notice.interface";

const NoticeSchema = new Schema<INotice>(
  {
    title: {
      type: String,
    },
    details: {
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

export const Notice = model<INotice, NoticeModel>("Notice", NoticeSchema);
