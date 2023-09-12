import { Schema, model } from "mongoose";
import { EventModel, IEvent } from "./event.interface";

const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    pbulishDate: {
      type: String,
      required: true,
    },
    file: {
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

export const Event = model<IEvent, EventModel>("Event", EventSchema);
