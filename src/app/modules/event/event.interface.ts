import { Model } from "mongoose";

export type IEvent = {
  title: string;
  details: string;
  pbulishDate: string;
  file: string;
};

export type EventModel = Model<IEvent, Record<string, unknown>>;
