import { Model } from "mongoose";

export type INotice = {
  title: string;
  details: string;
  pbulishDate: string;
  file: string;
};

export type NoticeModel = Model<INotice, Record<string, unknown>>;
